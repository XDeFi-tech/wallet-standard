import { registerWallet } from './register.js';
import { CtrlWalletWallet } from './wallet.js';
import type { CtrlWallet } from './window.js';

export function initialize(
    ctrlWallet: CtrlWallet,
    options: {
        hooks: CtrlWalletWallet['hooks'];
    }
): void {
    registerWallet(new CtrlWalletWallet(ctrlWallet, options));
}
