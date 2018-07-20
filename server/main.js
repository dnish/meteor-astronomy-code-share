import { Meteor } from 'meteor/meteor';
import {Video} from "./videos";

Meteor.startup(() => {

    const video = new Video({name:'test'});
    video.save();
    video.canRelease();
});
