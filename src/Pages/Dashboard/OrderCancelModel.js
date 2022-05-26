import React from 'react';

const OrderCancelModel = ({ item, refetch }) => {
    const { _id, productName } = item

    const handleCancel = () => {
        const url = `http://localhost:5000/order/${_id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data =>
                refetch())
    }



    return (
        <div>
            <input type="checkbox" id="Order-Cancel-Modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box ">
                    <label for="Order-Cancel-Modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 class="font-bold text-lg text-center text-warning">CONFIRMATION</h1>
                    <p class="py-4 text-xl text-center text-warning">Do You Want To Cancel Your   <span className='text-red-600 text-2xl text-bold'>{productName}</span> Order ?</p>
                    <div class="modal-action">
                        <label
                            for="Order-Cancel-Modal" class="btn btn-error" onClick={handleCancel}
                        >Yes!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCancelModel;