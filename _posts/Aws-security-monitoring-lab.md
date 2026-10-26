
---
title: "AWS Security Monitoring & Detection Lab"
date: 2026-10-26 12:00:00 +0200
categories: [Cloud Security, AWS]
tags: [aws, cloudtrail, cloudwatch, eventbridge, sns, security-monitoring]
---

## 1. Overview

This hands-on lab explores security monitoring and event-driven detection in AWS using CloudTrail, CloudWatch, EventBridge, and SNS.

The objective is to understand how security-relevant activity can be recorded, matched against detection conditions, monitored, and used to trigger notifications.

## 2. Objectives

- Understand the role of AWS CloudTrail in recording account activity.
- Explore CloudWatch metrics, logs, and alarms.
- Configure EventBridge rules to match relevant events.
- Understand how SNS supports notification workflows.
- Investigate failed console sign-in activity.
- Monitor security group configuration changes.
- Troubleshoot configuration issues and validate expected behavior.

## 3. Architecture

Document the event flow used in the lab:

1. An AWS activity generates an event.
2. The relevant service records or receives the event.
3. A configured rule or monitoring condition identifies activity of interest.
4. The configured target or alarm workflow initiates the appropriate notification.

**Insert architecture diagram here.**

<!-- Add a diagram of the actual lab configuration. Do not include credentials or account identifiers. -->

## 4. Services Used

### AWS CloudTrail

Records supported AWS account activity and API events, helping investigators understand who performed an action, what happened, and when.

### Amazon CloudWatch

Provides monitoring capabilities through metrics, logs, and alarms.

### Amazon EventBridge

Matches events against configured rules and routes matching events to configured targets.

### Amazon SNS

Supports message delivery to configured subscribers and endpoints.

## 5. Implementation Notes

Document the actual configuration used in the lab, including:

- Event source and event pattern
- Rule name and target
- Metric or alarm configuration
- Evaluation period and threshold, where applicable
- SNS topic and notification setup

**Insert screenshots of the actual configuration here.**

## 6. Troubleshooting

Record each issue using the following structure:

- **Symptom:** What happened?
- **Investigation:** What configuration or evidence was examined?
- **Root cause:** What caused the issue?
- **Resolution:** What change corrected it?
- **Validation:** What evidence confirmed the result?

Include the rule naming conflict encountered during setup, along with the exact error message and verified resolution.

## 7. Security Lessons

- Logging is useful only when relevant events can be investigated.
- Detection rules must match the event structure and intended security condition.
- Notifications depend on correctly configured targets and permissions.
- Monitoring thresholds should reflect the use case and expected activity.
- Troubleshooting should be based on evidence rather than assumptions.

## 8. Results & Evidence

Document which configurations were completed and which scenarios were successfully tested.

Add screenshots showing the actual results, with sensitive account information redacted.

## 9. Limitations

This was a training lab. The configuration and results should not be interpreted as a production-ready monitoring deployment without further testing, operational requirements, and security review.

## 10. Conclusion

This lab strengthened my understanding of how AWS logging, event detection, monitoring, and notifications can work together to support cloud security visibility.

The exercise also highlighted the importance of validating event patterns, monitoring conditions, and configuration changes during troubleshooting.
