import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import axios from "axios"
import BlogItem from "../blog/blog-item"
import BlogModal from "../modals/blog-modal"

class Blog extends Component {
    constructor(){
        super()

        this.state ={
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true,
            blogModalIsOpen: false
        };

        this.getBlogItems = this.getBlogItems.bind(this)
        this.onScroll = this.onScroll.bind(this)
        window.addEventListener("scroll", this.onScroll, false)
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleSucessfulNewBlogSubmission = this.handleSucessfulNewBlogSubmission.bind(this)
    }

    handleSucessfulNewBlogSubmission(blog){
        this.setState({
            blogModalIsOpen: false,
            blogItems: [blog].concat(this.state.blogItems)
        })
    }

    handleModalClose(){
        this.setState({
            blogModalIsOpen: false
        })
    }

    handleNewBlogClick(){
        this.setState({
            blogModalIsOpen: true
        })
    }

    onScroll(){
            if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
                return;
            }
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                this.getBlogItems()
            }
    }

    renderAllBlogItems(){
        this.setState({
            currentPage: this.state.currentPage
        })
        axios.get(`https://tashanemclean.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, {withCredentials:true})
    }

    getBlogItems(){
        this.setState({
            currentPage: this.state.currentPage + 1
        });

        axios.get(`https://tashanemclean.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, {withCredentials:true})
        .then(response => {
            console.log("getting", response.data)
            this.setState({
                blogItems: this.state.blogItems.concat(
                response.data.portfolio_blogs),
                totalCount: response.data.meta.total_records,
                isLoading: false
            })
        }).catch(error => {
            console.log("getBlogItems Error", error)
        });
    }

    componentWillMount(){
        this.getBlogItems();
        this.renderAllBlogItems();
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.onScroll, false)
    }


    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem}/>
        });

        return (
            <div className="blog-container">
            <BlogModal 
            handleSucessfulNewBlogSubmission={this.handleSucessfulNewBlogSubmission}
            handleModalClose={this.handleModalClose}
            modalIsOpen={this.state.blogModalIsOpen}/>
            <div className="content-container">{blogRecords}
            </div>
            {console.log(blogRecords)}
            {this.props.loggedInStatus === "LOGGED_IN" ? (
            <div className="new-blog-link">
                <a onClick={this.handleNewBlogClick}>
                <FontAwesomeIcon icon="plus-circle"/>
                </a>
            </div>) : null}

            {this.state.isLoading ? (
            <div className="content-loader">
                <FontAwesomeIcon icon="cog" spin />
            </div>) : null}
            </div>
        )
    }
}

export default Blog