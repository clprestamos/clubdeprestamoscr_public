import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

class Recaptcha extends Component {
  onChange(value) {
    console.log('Captcha value:', value);
  }
  render() {
    const { SITE_KEY } = process.env;
    return (
      <ReCAPTCHA
        ref={(c) => { this.recaptcha = c; }}
        sitekey={SITE_KEY}
        onChange={this.onChange}
      />
    );
  }
}

export default Recaptcha;
