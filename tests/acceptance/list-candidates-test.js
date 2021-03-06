import { module, test } from 'qunit';
import { 
  click,
  currentURL,
  visit 
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/addon-test-support/setup-mirage/';
import { resolve } from 'rsvp';

const ITEMS = [{skills: ['javascript']}, {skills: ['python']}, {skills: ['.NET']}];
const FILTERED_ITEMS = [{skills: 'javascript'}];

module('Acceptance | list candidates', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show candidates as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/candidates', 'should redirect automatically');
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
  
  test('should link to contact information', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should link to candidates profile on source.', async function (assert) {
  });

  test('should open contact form', async function (assert) {
  });

  test('should initially load all listings', async function (assert) {
    this.set('filterBySkill', () => resolve({ results: ITEMS }));
  });

  test('should list available candidates.', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });

  test('should filter the list of candiates by skills.', async function (assert) {
  });

  test('should filter favourites', async function (assert) {
  });
});
