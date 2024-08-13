// This is copied from @wallet-standard/wallet
import { Transaction, VersionedTransaction } from '@solana/web3.js';

export function bytesEqual(a: Uint8Array, b: Uint8Array): boolean {
    return arraysEqual(a, b);
}

interface Indexed<T> {
    length: number;
    [index: number]: T;
}

export function arraysEqual<T>(a: Indexed<T>, b: Indexed<T>): boolean {
    if (a === b) return true;

    const length = a.length;
    if (length !== b.length) return false;

    for (let i = 0; i < length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

export function isVersionedTransaction(
    transaction: Transaction | VersionedTransaction
): transaction is VersionedTransaction {
    return 'version' in transaction;
}

export function recoverTransactionFromTransactionBytes(bytes: Uint8Array): Transaction | VersionedTransaction {
    try {
        return Transaction.from(bytes);
    } catch (error) {
        return VersionedTransaction.deserialize(bytes);
    }
}

export function serializeTransaction(transaction: Transaction | VersionedTransaction) {
    return isVersionedTransaction(transaction)
        ? (transaction as VersionedTransaction).serialize()
        : (transaction as Transaction).serialize({
              requireAllSignatures: false,
              verifySignatures: false,
          });
}
