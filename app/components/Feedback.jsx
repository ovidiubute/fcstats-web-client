import React from 'react'
import $ from 'jquery'

import { apiUrl } from '../utils/api'

export default class Feedback extends React.Component {
  render() {
    return (
      <div id="feedback">
      	<div id="feedback-form" style={{display: "none"}} className="col-xs-4 col-md-4 panel panel-default">
      		<form onSubmit={this.submitFeedback} method="POST" action={apiUrl + '/feedback'} className="form panel-body" role="form">
      			<div className="form-group">
      				<input className="form-control" name="email" autofocus placeholder="Your e-mail" type="email" />
      			</div>
      			<div className="form-group">
      				<textarea className="form-control" name="body" required placeholder="Please write your feedback here..." rows="5"></textarea>
      			</div>
      			<button className="btn btn-primary pull-right" type="submit">Send</button>
      		</form>
      	</div>
      	<div id="feedback-tab" onClick={this.toggleForm}>Feedback</div>
      </div>
    );
  }

  toggleForm(e) {
    $("#feedback-form").toggle("slide");
  }

  submitFeedback(e) {
    e.preventDefault();
    var $form = $(e.target);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function() {
				$("#feedback-form").toggle("slide").find("textarea").val('');
			}
		});
  }
}
