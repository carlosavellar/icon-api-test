import { takeEvery, put, fork, call } from 'redux-saga/effects';
import * as actions from './../actions/character';
import * as api from './../api/character';

function* getCharacter() {
  try {
    const results = yield call(api.getCharacter);

    yield put(
      actions.getCharacterSuccess({
        items: results.data.results,
      })
    );
    console.log(Array.isArray(results.data.results));
  } catch (err) {
    throw new Error('Motha fucka error');
  }
}

function* wacthGetCharacterRequest() {
  yield takeEvery(actions.Types.GET_CHARACTERS_REQUEST, getCharacter);
}

const characterSaga = [fork(wacthGetCharacterRequest)];

export default characterSaga;
