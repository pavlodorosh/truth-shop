import React, {useContext} from 'react'
import { Textbox } from 'react-inputs-validation'
import { adminData } from '../../pages/Admin'

const TopPanes = () => {
    const data = useContext(adminData)
    const product = data.newProduct

    return (
        <div className="panel-body">
            <div className="product_description col-sm-12">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <span className="nav-link active" data-toggle="tab" href="#home" role="tab">
                            EN
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" data-toggle="tab" href="#profile" role="tab">
                            RU
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" data-toggle="tab" href="#messages" role="tab">
                            UA
                        </span>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="home" role="tabpanel">
                        <div className="form-group">
                            <label>Name [en] </label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.name.en = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.name.en}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description [en]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.description.en = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.description.en}
                            />
                        </div>
                        <div className="form-group">
                            <label>Return [en]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.return.en = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.return.en}
                            />
                        </div>
                        <div className="form-group">
                            <label>Care [en]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.care.en = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.care.en}
                            />
                        </div>
                    </div>
                    <div className="tab-pane" id="profile" role="tabpanel">
                        <div className="form-group">
                            <label>Name [RU]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.name.ru = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.name.ru}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description [RU]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.description.ru = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.description.ru}
                            />
                        </div>
                        <div className="form-group">
                            <label>Return [ru]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.return.ru = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.return.ru}
                            />
                        </div>
                        <div className="form-group">
                            <label>Care [ru]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.care.ru = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.care.ru}
                            />
                        </div>
                    </div>
                    <div className="tab-pane" id="messages" role="tabpanel">
                        <div className="form-group">
                            <label>Name [UA]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.name.ua = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.name.ua}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description [UA]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.description.ua = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.description.ua}
                            />
                        </div>
                        <div className="form-group">
                            <label>Return [ua]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.return.ua = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.return.ua}
                            />
                        </div>
                        <div className="form-group">
                            <label>Care [ua]</label>
                            <Textbox
                                type="text"
                                className="form-control"
                                name="name_en"
                                onChange={(val, e) => {
                                    product.care.ua = val
                                }}
                                onBlur={() => {}}
                                classNameInput="ama_input_validate"
                                classNameContainer="ama_input_container"
                                classNameWrapper="ama_input_wrapper"
                                value={product.care.ua}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPanes

