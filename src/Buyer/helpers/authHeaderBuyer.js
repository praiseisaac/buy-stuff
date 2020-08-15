import { buyerAuthService } from './../services/buyerAuthService';

export function authHeaderBuyer() {
    // return authorization header with jwt token
    const currentBuyer = buyerAuthService.currentBuyerValue;
    if (currentBuyer && currentBuyer.token) {
        return { Authorization: `Bearer ${currentBuyer.token}` };
    } else {
        return {};
    }
}