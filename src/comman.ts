
export interface User {
    username: string;
    password: string;
}

export interface TokenResponse {
    accessToken: string;
    idToken: string;
}

export interface SubscriptionMessage {
    type?: string;
    symbol?: string;
    user?: string;
    id?: string;
    action: string;
}

export interface ObItem {
    price: number;
    size: number;
}

export interface InstrumentMessage {
    instrumentId: string,
    marketIdx: number,
    instrumentParameterIdx: number,
    symbol: string,
    type: string,
    issuerIdx: string,
    tokenType: string,
    settlementCurrencyIdx: number,
    status: string,
    quantityScale: number,
    priceScale: number,
    ref_ver: number,
    idx: number
}

export interface OrderBook {
    buy: ObItem[];
    sell: ObItem[];
    id?: string;
    msgType?: string;
    sequence?: number;
}

export enum validate {
    COUNT = "COUNT",
    CONTENT = "CONTENT"
}

export enum obSide {
    BUY = "BUY",
    SELL = "SELL"
}

export interface Order {
    clOrderId: string;
    symbol: string;
    orderType: string;
    price: string;
    orderQty: string;
    userId: string;
    side: string;
    tif: string;
}

export interface ExecutionReport {
    clOrderId: string;
    orderId: string;
    execId: string;
    execType: string;
    rejectReason: string;
    price: string;
    orderQty: string;
    leavesQty: string;
    execPrice: string;
    execSize: string;
    cumExecSize: string;
    orderStatus: string;
    tif: string;
    orderType: string;
    side: string;
    userId: string;
    symbol: string;
    requestUserId: string;
    transactionTime: number;
    outputSequence: number;
    totalLatency: number;
    coreLatency: number;
}

export interface WSMessage {
    expectedKey: string;
    expectedVal: any;
    comparison?: string;
}
