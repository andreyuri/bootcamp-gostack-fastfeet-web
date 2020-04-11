export function addDeliveryRequest(data) {
  return {
    type: '@delivery/ADD_REQUEST',
    payload: { data },
  };
}

export function addDeliverySuccess(delivery) {
  return {
    type: '@delivery/ADD_SUCCESS',
    payload: { delivery },
  };
}

export function addDeliveryFailure() {
  return {
    type: '@delivery/ADD_FAILURE',
  };
}
