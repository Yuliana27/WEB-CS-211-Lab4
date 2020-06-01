import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button, Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import "../css/Comments.css"

    function RenderDish({dish}) {
        return(
            <h class='namecake3'>Капкейк {dish.name}</h>
        );
    }

    function RenderComments({comments, addComment, dishId}){
        // console.log(comments)
        if (comments != null) {

            return(
                <div>
                        <CommentForm dishId={dishId} addComment={addComment}>
                        </CommentForm>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/comments">Додати відгук</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                            <RenderDish dish={props.dish} />
                            <RenderComments
                                comments={props.comments}
                                addComment={props.addComment}
                                dishId={props.dish.id}
                            />
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }

    }

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.comment);

    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal} className="enter">Добавити відгук</Button>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                         <Row className="form-group">
                                <Label htmlFor="comment"  md={12}>Напишіть чи було смачно ! Будемо раді прочитати твої відгуки :)</Label>
                                <Col  md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" resize="none" rows="6" className="form-control" />
                                    <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" className="enter">Додати відгук</Button>
                        </LocalForm>
            </div>
        )
    }
}



export default DishDetail