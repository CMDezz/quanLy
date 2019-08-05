import React, { Component } from 'react';
import TaskItem from './taskitem';


class Control extends Component {
    render() {
        return (
            <div>
                <header className="page-header">
                    <div className="page-name">
                        <img src="./img/avt.jpg" />
                        <p >Lê Việt</p>
                    </div>
                    <div className="page-nav">
                        <p>Danh sách công việc</p>
                        <input className="page-search" type="search" placeholder=" Tìm kiếm công việc" aria-label="Search" />
                    </div>
                </header>
                <section className="page-body">
                    <section className="page-control">
                        <div className="btnControl">
                            <button className="btn btn-primary text-center"> <i className="fa fa-edit" />  Lấy task từ LocalStorage</button>
                            <button className="btn btn-success   text-center"> <i className="fa fa-edit" />  Tạo task mới</button>
                        </div>
                        <div className="filterControl">
                            <div className="filterProcess filter">
                                <p className="font-weight-bold">Lọc</p>
                                <a className="text-dark" href="#">Tất cả</a>
                                <a className="text-dark" href="#"><i className="fa fa-spinner" /> Đang tiến hành</a>
                                <a className="text-dark" href="#"><i className="fa fa-anchor" /> Chưa bắt đầu</a>
                                <a className="text-dark" href="#"><i className="fa fa-check" /> Hoàn thành</a>
                                <a className="text-dark" href="#"><i className="fa fa-trash" /> Hủy bỏ</a>
                            </div>
                            <div className="filterType filter">
                                <p className="font-weight-bold">Nhãn</p>
                                <a className="text-dark" href="#"> Tất cả</a>
                                <a className="text-dark" href="#"><div style={{ backgroundColor: '#328b08d6' }} />   Frontend</a>
                                <a className="text-dark" href="#"> <div style={{ backgroundColor: '#763edbdb' }} />  Backend</a>
                                <a className="text-dark" href="#"> <div style={{ backgroundColor: '#06b1c8d9' }} />   API</a>
                                <a className="text-dark" href="#"><div style={{ backgroundColor: '#de2624c7' }} />  Issue</a>
                            </div>
                            <div className="filterSelect">
                                <div className="primary">
                                    <p>Độ ưu tiên : </p>
                                    <select className="primarySelect select" name="primary" >
                                        <option value={1}>Tất cả</option>
                                        <option value={2}>Thấp</option>
                                        <option value={3}>Trung bình</option>
                                        <option value={4}>Cao</option>
                                    </select>
                                </div>
                                <div className="alphabet">
                                    <p>Sắp xếp theo công việc :</p>
                                    <select className="alphabetSelect select" name="alphabet">
                                        <option value={1}>Từ A-Z</option>
                                        <option value={2}>Từ Z-A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                    <TaskItem></TaskItem>
                </section>
            </div>

        );
    }
}

export default Control;
