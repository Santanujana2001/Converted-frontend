import React from "react";
import "../request/request.css";
function request() {
    return (
        <div>
            <div className="title">
                <h1>UNIVERSITY NAME</h1>
                <br />
                <h3>ID:123456789</h3>
                <div className="accept">Accepted:12</div>
                <div className="accept">Pending:2</div>
                <div className="tabledata">
                    <h2>TABLE</h2>
                </div>
                <table style={{ backgroundColor: "#292941" }} className="table table1">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">College Name</th>
                            <th scope="col">HOI</th>
                            <th scope="col">Email</th>
                            <th scope="col">Landline</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                            <th scope="col">Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Hooghly Engineering And Technology College</td>
                            <td>Santanu Jana</td>
                            <td>Hetc@gmail.com</td>
                            <td>2354-875</td>
                            <td>Kalyani</td>
                            <td>11/7/22</td>
                            <td>
                                <i className="fa-solid fa-circle-check fa-xl" />
                                <i className="fa-solid fa-circle-xmark fa-xl" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}
export default request;