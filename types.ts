export interface OrderListResponse {
    data: OrderResponse[],
    meta: {
        pagination: PaginationResponse
    }
}
export interface OrderResponse {
    id: number,
    attributes: {
        status: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        order_items: {
            data: OrderItemResponse[],
        },
        order_meta: {
            data: OrderMetaResponse[],
        },
    }
}

export interface OrderItemResponse {
    id: number,
    attributes: [{
        quantity: number,
        price: number,
        createdAt: string,
        updatedAt: string,
    }]
}

export interface OrderMetaResponse {
    id: number,
    attributes: [{
        shipping_postcode: string,
        shipping_firstname: string,
        createdAt: string,
        updatedAt: string,
    }]
}

export interface Order {
    status: string,
    type: string,
    order_items: [],
    order_meta: object
}

export interface PaginationResponse {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}