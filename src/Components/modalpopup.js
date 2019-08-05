import React, { Component } from 'react';

class ModalPopup extends Component {
    render() {
        return (
            <div className="modal  bd-example-modal-lgl" id="modalMe" tabIndex={-1} role="dialog">
                <div className="modal-dialog  modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chỉnh sửa công việc</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Tên công việc</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nhập tên công việc" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Mô Tả</label>
                                    <textarea placeholder="Nhập mô tả" style={{ height: 60 }} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Độ ưu tiên</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Thấp</option>
                                        <option>Trung Bình</option>
                                        <option>Cao</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Người thực hiện</label>
                                    <section className="form-group ml-4">
                                        <input className="form-check-input " type="checkbox" name="Viet" id="cbViet" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            Việt Lê
              </label>
                                        <input type="checkbox" name="Hoang" id="cbHoang" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            Hoàng Nguyễn
              </label>
                                        <input type="checkbox" name="Tai" id="cbTai" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            Tài Ngọc
              </label>
                                        <input type="checkbox" name="Nhi" id="cbNhi" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            Nhi Nguyễn
              </label>
                                    </section>
                                </div>
                                <div className="form-group">
                                    <label>Nhãn</label>
                                    <section className="form-group ml-4">
                                        <input className="form-check-input " type="checkbox" name="frontend" id="cbFrontend" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            Frontend
              </label>
                                        <input type="checkbox" name="backend" id="cbBackend" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            Backend
              </label>
                                        <input type="checkbox" name="api" id="cbApi" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            API
              </label>
                                        <input type="checkbox" name="issue" id="cbIssue" />
                                        <label className="form-check-label mr-3" htmlFor="gridCheck1">
                                            Issue
              </label>
                                    </section>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Lưu thay đổi</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default ModalPopup;
