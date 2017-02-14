import alt from '../alt';

class FooterActions {
	constructor() {
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail'
		);
	}

	getTopCharacters(){
		console.log('get top characters');
		$.ajax({ url : '/api/characters/top' })
			.done((data) => {
				console.log('get top characters - SUCCESS');
				this.actions.getTopCharactersSuccess(data)
			})
			.fail((jqXhr) => {
				console.log('get top characters - FAIL');
				this.actions.getTopCharactersFail(jqXhr)
			});
	}
}

export default alt.createActions(FooterActions);