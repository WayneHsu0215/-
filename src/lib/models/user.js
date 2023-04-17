import bcrypt from 'bcrypt';
import db from '$lib/server/database';
import { randomBytes } from 'crypto';

/**
 * 使用者（管理系統）
 *
 * @property {string} id - 帳號
 * @property {string} name - 名稱
 */
export default class User {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
}

/**
 * 建立使用者
 *
 * @param {Object} user - 使用者資料
 * @param {string} user.id - 帳號
 * @param {string} user.name - 名稱
 * @param {string} user.password - 密碼
 * @returns {Promise<any>}
 */
export async function createUser(user) {
	return db('users').insert({
		id: user.id,
		name: user.name,
		password: await bcrypt.hash(user.password, 10),
	});
}

/**
 * 使用者登入
 *
 * @param {string} id - 帳號
 * @param {string} password - 密碼
 * @returns {Promise<boolean>}
 */
export async function signIn(id, password) {
	if (!id || !password) {
		return false;
	}
	const user = await db('users').select('password').where('id', id).first();
	if (!user) {
		return false;
	}
	return bcrypt.compare(password, user.password.toString());
}

/**
 * 取得使用者
 *
 * @param {string} id - 帳號
 * @returns {Promise<User | null>}
 */
export async function getUser(id) {
	const user = await db('users').where({ id }).first();
	return user ? new User(user) : null;
}

/**
 * 使用者工作階段
 *
 * @typedef {Object} UserSession
 * @property {string} id - ID
 * @property {string} userId - 使用者帳號
 */

/**
 * 建立工作階段
 *
 * @param {string} userId - 使用者帳號
 * @returns {Promise<string | null>} 工作階段 ID
 */
export async function createSession(userId) {
	if (!userId) {
		return null;
	}
	const id = randomBytes(32).toString('hex');
	await db('users_sessions').insert({ id, userId });
	return id;
}

/**
 * 取得工作階段
 *
 * @param {string} id - 工作階段 ID
 * @returns {Promise<UserSession | null>}
 */
export function getSession(id) {
	return (
		db('users_sessions')
			.select('users_sessions.id as id', 'users.id as user_id', 'users.name as user_name')
			.where('users_sessions.id', id ?? null)
			.join('users', 'user_id', 'users_sessions.user_id')
			.first() || null
	);
}

/**
 * 刪除工作階段
 *
 * @param {string} id - 工作階段 ID
 * @returns {Promise<void>}
 */
export function deleteSession(id) {
	return db('users_sessions')
		.where('id', id ?? null)
		.del();
}
