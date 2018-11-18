import DS from 'ember-data';

export default DS.Model.extend({
    // "total_count": DS.attr(),
    //     "incomplete_results": DS.attr(),
    //     "items":DS.attr()
    "login": DS.attr(),
    // "id": DS.attr(),
    "node_id": DS.attr(),
    "avatar_url": DS.attr(),
    "gravatar_id": DS.attr(),
    "url": DS.attr(),
    "html_url": DS.attr(),
    "followers_url": DS.attr(),
    "following_url": DS.attr(),
    "gists_url": DS.attr(),
    "starred_url": DS.attr(),
    "subscriptions_url": DS.attr(),
    "organizations_url": DS.attr(),
    "repos_url": DS.attr(),
    "events_url": DS.attr(),
    "received_events_url": DS.attr(),
    "type": DS.attr(),
    "site_admin": DS.attr(),
    "score": DS.attr(),
    "skills": DS.attr(),
});
