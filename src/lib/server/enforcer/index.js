import { newEnforcer, newModel } from 'casbin';
import { KnexAdapter } from 'casbin-knex-adapter';
import db from '$lib/server/database';
import modelConf from './model.conf?raw';

const enforcer = await newEnforcer(
	newModel(modelConf),
	await KnexAdapter.newAdapter(db, {
		tableName: 'casbin_rule',
	})
);

enforcer.enableAutoSave(true);

await enforcer.loadPolicy();

export default enforcer;
