/*
    This file is part of XeniumFaucet.

    XeniumFaucet is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    XeniumFaucet is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with XeniumFaucet.  If not, see <https://www.gnu.org/licenses/>.
*/

module.exports = {
	// Filenames for the databases
	databases: {
		transactions: 'transactions.db',
		addresses: 'addresses.db'
	},

	// WalletAPI configuration
	wallet: {
		// Set openWallet to true if it should open the wallet configured
		openWallet: false,

		// The wallet to open
		walletToOpen: {
			filename: 'faucet.wallet',
			password: 'faucet',
			daemon: {
				host: '127.0.0.1',
				port: 24888
			}
		},

		// The server the wallet API is running on
		host: '127.0.0.1',
		port: 8065,

		// Password for the wallet API
		password: 'faucet',

		// Coin configuration
		defaultUnlockTime: 60,
		defaultMixin: 5,
		decimalPlaces: 8,
		decimalDivisor: 10 ** 8, // 10 to the power of decimalPlaces
		defaultFee: 0.0000001
	},

	// Backend configuration
	faucet: {
		// The port where the faucet should run on
		port: 8909,

		// The minimum amount of coins to be sent
		minimumCoinsToBeSent: 0.5,

		// The maximum amount of coins to be sent
		maximumCoinsToBeSent: 12,

		// Address validation
		walletAddressLength: 98,
		walletAddressStartsWith: 'NaCa',

		// Coins are claimable every this many seconds
		claimableEvery: (24 * 60 * 60 * 1000), // 24 hours
	},

	// Frontend configuration
	frontend: {
		// Coin configuration for the frontend
		coinName: 'NashCash',
		ticker: 'NaCa',

		// Coin claiming interval as a string
		claimableEvery: '24 hours',

		// The person this faucet is run by, with Discord Tag
		faucetOwner: 'Lein Ad',
		faucetOwnerDiscord: 'Lein Ad#5415'
	}
}
