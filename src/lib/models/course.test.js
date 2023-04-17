import * as course from './course';
import { expect, test } from 'vitest';

test('get courses', async () => {
	await expect(course.getCourses({})).resolves.toContainEqual({
		id: expect.any(Number),
		clusterId: expect.any(Number),
		clusterName: expect.any(String),
		admissionYear: expect.any(Number),
		courseId: expect.stringMatching(/^\d{4}$/),
		type: expect.stringMatching(/^\d$/),
		name: expect.any(String),
		englishName: null,
		credit: expect.any(Number),
		hours: expect.any(Number),
		semesters: expect.any(String),
		remark: expect.any(String),
		editionId: null,
		editionRemark: expect.any(String),
	});
});

test('get courses with filter', async () => {
	await expect(
		course.getCourses({ collegeId: '1', admissionYear: 110, type: '3', page: 2 })
	).resolves.toContainEqual({
		id: expect.any(Number),
		clusterId: expect.any(Number),
		clusterName: expect.any(String),
		admissionYear: 110,
		courseId: expect.stringMatching(/^\d{4}$/),
		type: '3',
		name: expect.any(String),
		englishName: null,
		credit: expect.any(Number),
		hours: expect.any(Number),
		semesters: expect.any(String),
		remark: expect.any(String),
		editionId: null,
		editionRemark: expect.any(String),
	});
});

test('count courses', async () => {
	await expect(course.countCourses({})).resolves.toBeGreaterThan(0);
});
