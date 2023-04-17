/**
 * 科目群組
 *
 * @typedef {Object} CourseGroup
 * @property {string} id - ID
 * @property {string} name - 名稱
 */

/**
 * 科目版次
 *
 * @typedef {Object} CourseVersion
 * @property {string} date - 通過日期
 * @property {string} remark - 備註
 * @property {Course[]} [courses] - 變更科目
 */

/**
 * 科目表區段
 *
 * @typedef {Object} CourseListSection
 * @property {string} id - ID
 * @property {string} title - 標題
 * @property {CourseCollection[]} content - 內容
 * @property {string} remark - 備註
 */

/**
 * 科目集合（標題）
 *
 * @typedef {Object} CourseCollection
 * @property {string} id - ID
 * @property {string} title - 標題
 * @property {Course[]} courses - 科目
 */

/**
 * 畢業條件
 *
 * @typedef {Object} GraduationThreshold
 * @property {number} commonRequiredCredit - 通識必修學分數
 * @property {number} majorRequiredCredit - 專業必修學分數
 * @property {number} commonElectiveCredit - 通識選修學分數
 * @property {number} majorElectiveCredit - 專業選修學分數
 * @property {number} interdiscipCredit - 跨域學分數
 * @property {number} totalCredit - 總學分數
 */
