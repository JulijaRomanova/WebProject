class User
{
    constructor(name = '') {
		if (name === '' || typeof (name) !== 'string') {
			console.log('Incorrect argument!');
			return;
		}
		this._name = name;
		this._likedPosts = [];
	}

	isUserName() {
		if (this._name === '' || typeof (this._name) !== 'string') {
			console.log('Incorrect argument!');
			return false;
		}
        return true;
    }
    setuserName(name = '') {
		if (name === '' || typeof (name) !== 'string') {
			console.log('Incorrect argument!');
			return;
		}
		this._name = name;
	}

	getUserName() {
		return this._name;
	}
}