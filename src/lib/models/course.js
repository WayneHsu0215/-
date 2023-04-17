import db from '$lib/server/database';

/**
 * 科目
 *
 * @property {number} id - ID
 * @property {number} admissionYear - 入學年度
 * @property {string} courseId - 科目編號
 * @property {string} type - 科目性質（必／選修）
 * @property {string} name - 中文名稱
 * @property {string} englishName - 英文名稱
 * @property {number} credit - 學分
 * @property {number} hours - 上課時數
 * @property {string[]} semesters - 開課學期
 * @property {string} remark - 備註
 * @property {number} editionId - 版次編號
 * @property {string} editionRemark - 版次備註
 */
export default class Course {}

/**
 * 科目篩選條件
 *
 * @typedef {Object} CourseFilter
 * @property {string} [courseId] - 科目編號
 * @property {number} [clusterId] - 學群 ID
 * @property {string} [departmentId] - 系所碼
 * @property {string} [collegeId] - 學院碼
 * @property {number} [admissionYear] - 入學年度
 * @property {string} [type] - 科目性質（必／選修）
 * @property {number} [page] - 頁碼
 */

/**
 * @param {import('knex').Knex} queryBuilder
 * @param {CourseFilter} filter - 篩選條件
 */
const withFilter = (queryBuilder, filter) => {
	const listClusters = (object) => db.select('id').from('clusters').where(object);
	const object = {};
	if (filter.courseId) {
		object.id = filter.courseId;
	} else if (filter.clusterId) {
		object['courses.cluster_id'] = filter.clusterId;
	} else if (filter.departmentId) {
		queryBuilder.whereIn(
			'courses.cluster_id',
			listClusters({ department_id: filter.departmentId })
		);
	} else if (filter.collegeId) {
		queryBuilder.whereIn('courses.cluster_id', listClusters({ college_id: filter.collegeId }));
	}
	if (filter.admissionYear) {
		object.admission_year = filter.admissionYear;
	}
	if (filter.type) {
		object.type = filter.type;
	}
	if (Object.keys(object).length) {
		queryBuilder.where(object);
	}
	if (filter.page) {
		queryBuilder.offset((filter.page - 1) * 25);
	}
};

/**
 * 取得科目列表
 *
 * @param {CourseFilter} filter
 * @returns {Promise<Course[]>}
 */
export function getCourses(filter) {
	return db
		.select('courses.*', 'clusters.name as cluster_name')
		.from('courses')
		.modify(withFilter, filter)
		.join('clusters', 'clusters.id', 'courses.cluster_id')
		.limit(25);
}

/**
 * 取得科目數量
 *
 * @param {CourseFilter} filter - 篩選條件
 * @returns {Promise<number>}
 */
export function countCourses(filter) {
	return db
		.count('id as count')
		.from('courses')
		.modify(withFilter, { ...filter, page: undefined })
		.then(([{ count }]) => count);
}
