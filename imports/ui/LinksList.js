import React,  {useState, useEffect} from 'react';
import { Links } from '../api/links';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import LinksListItem from './LinksListItem';
import FlipMove from 'react-flip-move';

export default class LinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    };

    componentDidMount() {
        console.log('componentDidMount LinksList');
        this.linksTracker = Tracker.autorun(() =>  {
            Meteor.subscribe('links');
            const links = Links.find({visible: Session.get('showVisible')}).fetch();
            this.setState({links});
        });
    }

    componentWillUnmount() {
        console.log('componentDidUnmount LinksList');
        this.linksTracker.stop();
    }

    renderLinksListItems() {
        if(this.state.links.length === 0) {
            return (
                <div className="item">
                    <p className="item__status-message">No links found</p>
                </div>
            );
        }
        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
            //return <p key={link._id}>{link.url}</p>
        });
    }

    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderLinksListItems()}
                </FlipMove>
            </div>
        );
    }
}
