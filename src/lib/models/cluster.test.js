import * as cluster from './cluster';
import { expect, test } from 'vitest';

test('get college', async () => {
	await expect(cluster.getCollege('1')).resolves.toEqual({
		id: expect.stringMatching(/^\d$/),
		name: expect.any(String),
	});
});

test('get college departments', async () => {
	await expect(cluster.getCollegeDepartments('1')).resolves.toContainEqual({
		id: expect.stringMatching(/^\d[A-Z0-9]$/),
		name: expect.any(String),
	});
});

test('get all colleges', async () => {
	await expect(cluster.getAllColleges()).resolves.toContainEqual({
		id: expect.stringMatching(/^\d$/),
		name: expect.any(String),
	});
});

test('get department', async () => {
	await expect(cluster.getDepartment('11')).resolves.toEqual({
		id: expect.stringMatching(/^\d[A-Z0-9]$/),
		name: expect.any(String),
	});
});

test('get department clusters', async () => {
	await expect(cluster.getDepartmentClusters('11')).resolves.toContainEqual({
		id: expect.any(Number),
		clusterId: expect.stringMatching(/^[A-Z0-9]{5}$/),
		name: expect.any(String),
	});
});

test('get cluster', async () => {
	await expect(cluster.getCluster(1)).resolves.toEqual({
		id: expect.any(Number),
		clusterId: expect.stringMatching(/^[A-Z0-9]{5}$/),
		name: expect.any(String),
		isVirtual: expect.any(Number),
	});
});

test('get cluster parent', async () => {
	await expect(cluster.getClusterParent(1, 'department')).resolves.toEqual({
		id: expect.stringMatching(/^\d[A-Z0-9]$/),
		name: expect.any(String),
	});
});

test('get current unit', async () => {
	await expect(cluster.getCurrentUnit({ collegeId: '1' })).resolves.toEqual({
		id: expect.stringMatching(/^\d$/),
		name: expect.any(String),
	});
});

test('get child units', async () => {
	await expect(cluster.getChildUnits({ collegeId: '1' })).resolves.toEqual({
		type: expect.stringMatching(/^(college|department|cluster)$/),
		data: expect.arrayContaining([
			expect.objectContaining({
				id: expect.stringMatching(/^\d[A-Z0-9]$/),
				name: expect.any(String),
			}),
		]),
	});
});
