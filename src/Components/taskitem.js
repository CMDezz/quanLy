import React, { Component } from 'react';


class TaskItem extends Component {
    render() {
        return (
            <section className="taskList">
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Công việc</th>
                        <th>Nhãn</th>
                        <th>Độ ưu tiên</th>
                        <th>Người thực hiện</th>
                        <th>Xử lý</th>
                        <th>Tình trạng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                         <td>1</td>
                       <td>Dạy Angular</td>
                       <td ><img  className="Nhann" src="./img/FE.png"/> <img  className="Nhann" src="./img/API.png"/></td>
                       <td>Trung Bình</td>
                       <td><img  className="Actor" src="./img/avt.jpg"/> <img  className="Actor" src="./img/nhi.jpg"/></td>
                       <td>
                           <button className="btn btn-info mr-2">Sửa</button>
                           <button className="btn btn-danger">Xóa</button>
                       </td>
                       <td><i className="fa fa-spinner" /></td>

                    </tr>
                                        
                    <tr>
                        <td>2</td>
                       <td>Soạn Python</td>
                       <td ><img  className="Nhann" src="./img/BE.png"/></td>
                       <td>Trung Bình</td>
                       <td><img  className="Actor" src="./img/hoang.jpg"/> <img  className="Actor" src="./img/tai.jpg"/></td>
                       <td>
                           <button className="btn btn-info mr-2">Sửa</button>
                           <button className="btn btn-danger">Xóa</button>
                       </td>
                       <td><i className="fa fa-spinner" /></td>
                    </tr>
                    
                    <tr>
                        <td>3</td>
                       <td>Soạn Reactjs</td>
                       <td ><img  className="Nhann" src="./img/BE.png"/> <img  className="Nhann" src="./img/FE.png"/></td>
                       <td>Thấp</td>
                       <td><img  className="Actor" src="./img/hoang.jpg"/> <img  className="Actor" src="./img/nhi.jpg"/></td>
                       <td>
                           <button className="btn btn-info mr-2">Sửa</button>
                           <button className="btn btn-danger">Xóa</button>
                       </td>
                       <td><i className="fa fa-anchor" /></td>
                    </tr>   
                    <tr>
                        <td>4</td>
                       <td>Thi Hackathon</td>
                       <td ><img  className="Nhann" src="./img/BE.png"/> <img  className="Nhann" src="./img/Issue.png"/> <img  className="Nhann" src="./img/FE.png"/></td>
                       <td>Cao</td>
                       <td><img  className="Actor" src="./img/hoang.jpg"/> <img  className="Actor" src="./img/nhi.jpg"/> <img  className="Actor" src="./img/avt.jpg"/></td>
                       <td>
                           <button className="btn btn-info mr-2">Sửa</button>
                           <button className="btn btn-danger">Xóa</button>
                       </td>
                       <td><i className="fa fa-check" /></td>
                    </tr>   
                </tbody>
            </table>
        </section>

        );
    }
}

export default TaskItem;
