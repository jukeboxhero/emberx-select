/*global expect */
import { beforeEach, describe, it } from 'mocha';
import jQuery from 'jquery';

export function shouldBindAttrs() {
  describe('native select element attributes', function() {
    beforeEach(function() {
      this.controller.setProperties({
        attrName: 'person-select',
        attrForm: 'person-form',
        title: 'person title',
        attrSize: '3',
        isRequired: true,
        hasAutofocus: true
      });
    });

    it('renders the name attribute', function() {
      expect(jQuery(this.element).attr('name')).to.equal('person-select');
    });
    it('renders the form attribute', function() {
      expect(jQuery(this.element).attr('form')).to.equal('person-form');
    });
    it('renders the title attribute', function() {
      expect(jQuery(this.element).attr('title')).to.equal('person title');
    });
    it('renders the size attribute', function() {
      expect(jQuery(this.element).attr('size')).to.equal('3');
    });
    it('renders the required attribute', function() {
      expect(jQuery(this.element).attr('required')).to.equal('required');
    });
    it('renders the autofocus attribute', function() {
      expect(jQuery(this.element).attr('autofocus')).to.equal('autofocus');
    });
    it('renders the tabindex attribute with 0', function() {
      expect(jQuery(this.element).attr('tabindex')).to.equal('0');
    });

    describe('setting tabindex', function() {
      beforeEach(function() {
        this.component.set('tabindex', 2);
      });

      it('has the correct tabindex value', function() {
        expect(jQuery(this.element).attr('tabindex')).to.equal('2');
      });
    });
  });
}
