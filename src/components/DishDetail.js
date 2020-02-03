import React, { Component } from "react";
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);


    }

    renderComments() {
        const comments = this.props.selectedDish.comments.map((com) => {
            return (
                <div key={com.id}>
                    <p>{com.comment}</p>
                    <p> --{com.author}, {com.date}</p>
                </div>



            );
        });
        if (comments != null) {
            return (

                <div>
                    <h4> Comments </h4>
                    <div>
                        {comments}
                    </div>
                </div>





            );
        }
        else {
            return (
                <div></div>
            );
        }

    }



    render() {
        const dish = this.props.selectedDish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>




            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetails;