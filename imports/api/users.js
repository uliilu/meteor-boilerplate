import { Meteor } from 'meteor/meteor';
import SimplSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;
    // try {
    new SimplSchema({
        email: {
            type: String,
            regEx: SimplSchema.RegEx.EmailWithTLD
        }
    }).validate({ email });
    // } catch (e) {
    //     throw new Meteor.Error(400, e.message);
    // }
    // console.log('validateNewUser',user);
    return true;
});
