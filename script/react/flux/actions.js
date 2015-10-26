import AppDispatcher from './dispatch';
export const TODOADD = 'TODOADD';
export const TODOCUT = 'TODOCUT';
export var actions = {
	add: function(text) {
		AppDispatcher.dispatch({
			actionType: TODOADD,
			text: text
		});
	},
	cut: function (text) {
		AppDispatcher.dispatch({
			actionType: TODOCUT,
			text: text
		})
	}
}
