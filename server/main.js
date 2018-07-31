import { Meteor } from 'meteor/meteor';
import {Video} from "/imports/videos";
import {Comment} from "../imports/comments";

Meteor.startup(() => {


    const comment = new Comment({name:'test'});
    comment.save();
    const video = new Video({name:'test'});
    video.save();

});


Meteor.publish("all",() => {
    return [
        Video.find()
    ];
});

Meteor.methods({
    'video': function () {
        return Video.findOne();
    }
});