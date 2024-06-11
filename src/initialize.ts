import { registerWallet } from './register.js';
import { XDEFIWalletWallet } from './wallet.js';
import type { XDEFIWallet } from './window.js';

export function initialize(
    xdefiWallet: XDEFIWallet,
    options: {
        hooks: XDEFIWalletWallet['hooks'];
    }
): void {
    registerWallet(new XDEFIWalletWallet(xdefiWallet, options));
}
