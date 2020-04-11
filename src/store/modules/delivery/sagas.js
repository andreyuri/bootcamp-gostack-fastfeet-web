import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { addDeliverySuccess, addDeliveryFailure } from './actions';

export function* addDelivery({ payload }) {
  try {
    const { recipient, deliveryman, product } = payload.data;

    const data = {
      recipient_id: recipient.id,
      deliveryman_id: deliveryman.id,
      product,
    };

    const response = yield call(api.post, '/deliveries', data);

    yield put(addDeliverySuccess(response));
    toast.success('Encomenda adicionada com sucesso');
    history.push('/delivery');
  } catch (err) {
    yield put(addDeliveryFailure());
    toast.error(
      'Não foi possível adicionar a encomenda. Por favor, verifique as informações preenchidas'
    );
  }
}

export default all([takeLatest('@delivery/ADD_REQUEST', addDelivery)]);
