import { Contract, WalletConnection, connect, keyStores } from 'near-api-js';

import environment from './config';

const nearEnv = environment('testnet');

export async function initializeContract() {
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearEnv
    )
  );

  window.walletConnection = new WalletConnection(near);
  window.accountId = window.walletConnection.getAccountId();

  const acc = await window.walletConnection._near.account(
    'friendbook.hamzatest.testnet'
  );

  window.contract = new Contract(acc, nearEnv.contractName, {
    changeMethods: ['submitMessage'],
  });
}
