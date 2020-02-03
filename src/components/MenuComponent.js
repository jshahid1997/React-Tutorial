import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetails from './DishDetail';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };


    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>

                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                            {/* <p> {dish.description}</p> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        return (
            <div className="container">
                <div className="row">

                    {menu}

                </div>

                <DishDetails selectedDish={this.state.selectedDish} />

            </div>
        );
    }


}


export default Menu;