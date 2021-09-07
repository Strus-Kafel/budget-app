import ACTIONS from "./action";
import store from './store';

const mapStateToProps = (state :any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch :any) => ({
    setAuthKey: (key :any)=> dispatch(ACTIONS.setAuthKey(key)),
    setLogin: (login :string) => dispatch(ACTIONS.setLogin(login)),
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store