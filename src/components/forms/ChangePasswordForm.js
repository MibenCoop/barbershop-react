import React from 'react';
import {Link} from 'react-router-dom'
import InlineError from '../messages/InlineError.js'
import BlockError from '../messages/BlockError.js'
import '../../styles/LoginForm.css'
 const ChangePasswordForm = (props) => {
    const { change, user, submit, errors } = props;
    return(
        <div className="form">
            <form className="login-form" onSubmit={submit}>
                <label htmlFor="oldPassword">
                    Старый пароль:
                </label>
                <input 
                    required 
                    onChange={change}
                    type="password" name="oldPassword" 
                    value={user.oldPassword}
                />
                <InlineError error={errors.oldPassword} /><br/>
                <label htmlFor="newPassword">
                    Новый пароль:
                </label>
                <input 
                    required 
                    onChange={change}
                    type="password" name="newPassword" 
                    value={user.newPassword}
                />
                <InlineError error={errors.newPassword} /><br/>
                <label htmlFor="newPasswordConfirm">
                    Подтверждение нового пароля:
                </label>
                <input 
                    required 
                    onChange={change}
                    type="password" name="newPasswordConfirm" 
                    value={user.newPasswordConfirm}
                />
                <InlineError error={errors.newPasswordConfirm} /><br/>
                <button>Сменить пароль</button>
                <BlockError error={errors.global} />
            </form>    
        </div>
    );
}

export default ChangePasswordForm;