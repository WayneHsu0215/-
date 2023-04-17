import db from '$lib/server/database';

/**
 * 取得學院
 *
 * @param {string} id - 學院 ID
 * @returns {Promise<{ id: string; name: string }>} - 學院
 */
export function getCollege(id) {
	return db.select('*').from('clusters_colleges').where({ id }).first();
}

/**
 * 取得學院下的系所
 *
 * @param {string} id - 學院 ID
 * @returns {Promise<{ id: string; name: string }[]>} - 系所列表
 */
export function getCollegeDepartments(id) {
	return db.select(['id', 'name']).from('clusters_departments').where({ college_id: id });
}

/**
 * 取得所有學院
 *
 * @returns {Promise<{ id: string; name: string }[]>} - 學院列表
 */
export function getAllColleges() {
	return db.select('*').from('clusters_colleges');
}

/**
 * 取得系所
 *
 * @param {string} id - 系所 ID
 * @returns {Promise<{ id: string; name: string }>} - 系所
 */
export function getDepartment(id) {
	return db.select(['id', 'name']).from('clusters_departments').where({ id }).first();
}

/**
 * 取得系所下的學群
 *
 * @param {string} id - 系所 ID
 * @returns {Promise<{ id: string; clusterId: string; name: string }[]>} - 學群列表
 */
export function getDepartmentClusters(id) {
	return db
		.select(['id', 'cluster_id', 'name'])
		.from('clusters')
		.where({ department_id: id, is_virtual: false });
}

/**
 * 取得學群
 *
 * @param {string} id - 學群 ID
 * @returns {Promise<{ id: string; clusterId: string; name: string; isVirtual: boolean }>} - 學群
 */
export function getCluster(id) {
	return db
		.select(['id', 'cluster_id', 'name', 'is_virtual'])
		.from('clusters')
		.where({ id })
		.first();
}

/**
 * 取得學群所屬單位
 *
 * @param {string} id - 學群 ID
 * @param {'college' | 'department'} type - 單位類型
 * @returns {Promise<{ id: string; name: string }>} - 單位
 */
export function getClusterParent(id, type) {
	const types = {
		college: { from: 'clusters_colleges', select: 'college_id' },
		department: { from: 'clusters_departments', select: 'department_id' },
	};
	return db
		.select(['id', 'name'])
		.from(types[type].from)
		.where('id', db.select(types[type].select).from('clusters').where({ id }))
		.first();
}

/**
 * 學群篩選條件
 *
 * @typedef {Object} ClusterFilter
 * @property {string} [collegeId] - 學院碼
 * @property {string} [departmentId] - 系所碼
 * @property {number} [clusterId] - 學群 ID
 */

/**
 * 取得目前單位，於選擇學群時用於顯示目前選擇的單位。
 *
 * @param {ClusterFilter} filter - 篩選條件
 * @returns {Promise<{ id: string; name: string } | boolean>} - 目前單位，若無則回傳 false
 */
export async function getCurrentUnit(filter) {
	if (filter.clusterId) return getCluster(filter.clusterId);
	if (filter.departmentId) return getDepartment(filter.departmentId);
	if (filter.collegeId) return getCollege(filter.collegeId);
	return false;
}

/**
 * 取得目前單位的下層單位，於選擇學群時顯示可選擇的下層單位。
 *
 * @param {ClusterFilter} filter - 篩選條件
 * @returns {Promise<{ type: string; data: { id: string; name: string }[] } | boolean>} - 目前單位下的子單位
 */
export async function getChildUnits(filter) {
	if (filter.clusterId) {
		if (!filter.departmentId) {
			const { departmentId } = await db
				.select('department_id')
				.from('clusters')
				.where({ id: filter.clusterId })
				.first();
			filter.departmentId = departmentId;
		}
		return { type: 'cluster', data: await getDepartmentClusters(filter.departmentId) };
	} else if (filter.departmentId) {
		return { type: 'cluster', data: await getDepartmentClusters(filter.departmentId) };
	} else if (filter.collegeId) {
		return { type: 'department', data: await getCollegeDepartments(filter.collegeId) };
	}
	return { type: 'college', data: await getAllColleges() };
}
