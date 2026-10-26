
---
title: About
icon: fas fa-info-circle
order: 1
---

# Asmaa Salah | Silent OwL 🦉

### Communications Engineering Graduate · Cybersecurity · Network Security · AWS Cloud Security

> Understand the system. Identify the weakness. Validate the risk. Secure the environment.

Welcome to my technical portfolio.

I'm Asmaa Salah, a Communications Engineering graduate building a career at the intersection of networking, cybersecurity, penetration testing, and cloud security.

My engineering background gives me a foundation for understanding how systems communicate, how networks are structured, and how technical components interact. I'm developing that foundation into practical security skills through hands-on labs, guided technical exercises, cloud security configurations, and structured documentation.

This portfolio is my technical workspace: a place to document what I build, what I investigate, the problems I solve, and the security concepts I learn along the way.

My goal is not simply to use security tools, but to understand the underlying behavior, identify weaknesses, validate findings safely, and communicate practical remediation steps.

---

## 🎯 Professional Focus

### Network & Infrastructure Security

My Communications Engineering background connects naturally with network and infrastructure security. I'm strengthening my understanding of network architecture, TCP/IP, traffic flow, and the security controls used to protect connected systems.

Areas of focus include:

- TCP/IP and networking fundamentals
- Network architecture and communication protocols
- Network security principles and access control
- Linux-based security environments
- Understanding network exposure and reducing attack surface
- Secure infrastructure design and troubleshooting

### Web Application Security & Penetration Testing

I'm developing a structured approach to web application security testing, with an emphasis on understanding vulnerabilities rather than relying on automated tools alone.

My learning roadmap includes:

- Authentication and authorization weaknesses
- Broken access control and IDOR
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Cross-Origin Resource Sharing (CORS) misconfigurations
- Local and Remote File Inclusion (LFI/RFI)
- File upload vulnerabilities
- Server-Side Request Forgery (SSRF)
- Command injection
- SQL injection (SQLi)

I use structured learning and lab-based practice to understand vulnerability mechanics, identify relevant evidence, assess impact, and study appropriate mitigations. Testing is conducted only in authorized environments.

My long-term direction includes penetration testing and bug bounty research, supported by responsible disclosure, reproducible findings, and clear technical reports.

### AWS Cloud Security

Cloud security is an important part of my technical development. I'm building practical knowledge of AWS security controls, identity and access management, logging, monitoring, and secure cloud network architecture.

My learning and lab work cover the following areas:

**Identity & Access Management (IAM)**
- Understanding identities, roles, policies, and permissions
- Reviewing identity-based and resource-based policies
- Applying the principle of least privilege
- Understanding role assumption and trust relationships
- Troubleshooting permission errors and Access Denied responses

**Amazon S3 Security**
- Bucket access controls and bucket policies
- Understanding principals, actions, and resources in policies
- Evaluating `s3:GetObject`, `s3:PutObject`, and `s3:ListBucket`
- Comparing access granted through different IAM roles
- Investigating why an operation is allowed or denied

**Cloud Logging, Monitoring & Detection**
- AWS CloudTrail for recording account activity and API events
- Amazon CloudWatch for metrics, logs, alarms, and monitoring
- Amazon EventBridge for event-driven detection and response workflows
- Amazon SNS for notification delivery
- Monitoring security-relevant activity and configuring alerting logic
- Investigating failed console sign-in events and security configuration changes

**Secure Cloud Infrastructure**
- EC2 security fundamentals
- Security groups and network access restrictions
- VPC architecture and subnet segmentation
- Secure network paths and controlled connectivity
- Understanding the role of AWS Systems Manager for instance management
- Building an understanding of secure, observable cloud environments

**Cloud Edge Security — Learning & Project Focus**
- AWS WAF and web request filtering
- CloudFront as a content delivery and edge security component
- Private S3 origin access using Origin Access Control (OAC)
- Route 53 health checks and availability considerations
- Monitoring WAF activity and configuring security alarms
- Understanding DDoS protection concepts and the role of AWS edge services

These topics connect preventive controls, detection, monitoring, and response into a broader cloud security approach.

---

## ☁️ AWS Security: Practical Experience

### AWS Security Monitoring & Detection Lab

**Focus:** CloudTrail · CloudWatch · EventBridge · SNS · Security Monitoring

I completed a hands-on AWS security monitoring lab involving security-relevant account activity, event detection, monitoring logic, and alerting.

The exercise involved working with AWS services to understand how activity can be recorded, matched against detection conditions, monitored, and used to trigger notifications.

Key concepts practiced:

- Understanding the role of CloudTrail in recording account activity
- Working with CloudWatch monitoring and alarm concepts
- Using EventBridge rules to match relevant events
- Integrating SNS for notifications
- Exploring detection logic for failed console sign-in attempts
- Monitoring security group configuration changes
- Troubleshooting rule configuration and naming conflicts
- Understanding how individual AWS services contribute to a monitoring workflow

**Security takeaway:** Effective cloud security requires more than configuring preventive controls. Security-relevant activity must also be observable, meaningful events must be detected, and alerts must reach the appropriate people or systems.

*This lab is documented as a completed training exercise, not as production incident-response experience.*

### AWS S3 Access Control & Resource-Based Policies Lab

**Focus:** IAM · S3 · Resource-Based Policies · Role Assumption · Least Privilege

This lab explored how AWS identity permissions and S3 bucket policies interact to determine whether a principal can access a resource.

The environment included a user, multiple IAM roles, and three S3 buckets with different access requirements.

Practical work included:

- Examining identity-based and resource-based permissions
- Comparing access through `BucketsAccessRole` and `OtherBucketAccessRole`
- Reviewing the role of the policy `Principal`
- Understanding how actions and resources affect authorization
- Testing object upload permissions
- Investigating Access Denied errors
- Verifying access behavior against the intended bucket permissions

The exercise included successfully uploading an object to the intended buckets using the appropriate roles, while examining the permission boundaries and policy conditions governing access.

**Security takeaway:** A permission decision depends on the applicable policies and the identity making the request. Understanding the relationship between IAM roles, trust relationships, and resource policies is essential for troubleshooting and enforcing least privilege.

---

## 🛡️ Security Operations & Defensive Thinking

My cybersecurity development also includes the defensive side of security: understanding events, examining evidence, identifying suspicious behavior, and thinking about how an organization can detect and respond to security issues.

Areas I'm developing include:

- Security log analysis
- Alert triage and investigation fundamentals
- Incident response concepts
- Security monitoring and detection logic
- Network and infrastructure visibility
- Clear documentation of observations and findings

I aim to understand both how security weaknesses can be discovered and how effective controls can prevent, detect, or reduce their impact.

---

## 🧰 Technical Toolkit

My toolkit is evolving through engineering study, guided training, and hands-on technical practice.

| Area | Technologies & Concepts |
|---|---|
| Operating Systems | Linux, Kali Linux |
| Networking | TCP/IP, networking fundamentals, network security |
| Web Security | OWASP Top 10 concepts, common web vulnerabilities, authorized lab testing |
| Cloud | AWS IAM, S3, EC2, CloudTrail, CloudWatch, EventBridge, SNS |
| Cloud Architecture & Edge Security | VPC, security groups, CloudFront, AWS WAF, Route 53 — learning and project focus |
| Security Monitoring | Logs, event rules, alarms, notification workflows |
| Technical Documentation | Lab notes, troubleshooting records, structured write-ups |

*The tools and services listed represent a combination of practical lab work and ongoing study. Individual project pages identify what was actually implemented and tested.*

---

## 🧠 My Technical Approach

I use a structured workflow when learning or investigating a technical security problem:

1. **Understand** — establish how the system, protocol, or service is expected to work.
2. **Map** — identify relevant components, trust boundaries, permissions, and communication paths.
3. **Investigate** — examine configurations, behavior, logs, or application responses.
4. **Validate** — reproduce the issue safely in an authorized environment.
5. **Assess** — explain the potential impact without overstating the evidence.
6. **Remediate** — identify practical mitigation and security improvements.
7. **Document** — record the setup, steps, evidence, results, limitations, and lessons learned.

I value understanding the reason behind a result, especially when troubleshooting unexpected behavior or permission errors.

---

## 🎓 Education & Engineering Background

**Communications Engineering Graduate**

My academic background introduced me to engineering systems, communication technologies, and the relationship between connected components.

I see networking as a technical foundation that supports my cyber security direction: understanding how systems exchange information makes it easier to reason about network exposure, access boundaries, infrastructure security, and cloud connectivity.

My long-term goal is to combine strong networking fundamentals with practical security analysis and secure infrastructure design.

---

## 🚀 Current Learning Road map

I'm continuing to develop my skills across several connected areas:

- **Web Application Security:** structured vulnerability study and authorized lab practice
- **Penetration Testing:** methodology, validation, impact analysis, and professional reporting
- **Bug Bounty:** learning to identify and report valid security issues responsibly
- **AWS Cloud Security:** IAM, secure S3 access, monitoring, detection, and infrastructure controls
- **Cloud Network Security:** VPC architecture, segmentation, edge controls, and secure connectivity
- **Security Operations:** event investigation, alert analysis, and incident response fundamentals

I prioritize practical understanding, repeatable exercises, and documented learning over collecting tools or listing technologies without evidence of use.

---

## 📂 Explore My Work

This portfolio is being developed around practical, verifiable technical work.

- **Cloud Security Labs** — AWS permissions, monitoring, event detection, and access control
- **Network Security** — networking concepts, infrastructure security, and troubleshooting
- **Web Security Write-ups** — authorized lab exercises and vulnerability analysis
- **Projects & Documentation** — implementation notes, technical decisions, findings, and lessons learned

Each project should explain the objective, environment, methodology, evidence, outcome, and relevant security recommendations.

---

## 🤝 Connect With Me

I'm interested in opportunities and collaborations related to junior cyber security roles, network security, cloud security, and practical security research.

- **GitHub:** [asmaa588](https://github.com/asmaa588)
- **Portfolio:** [asmaa588.github.io](https://asmaa588.github.io)

I'm continuing to build a foundation that connects engineering knowledge with practical cyber security skills — one investigation, one lab, and one documented lesson at a time.

> **Silent OwL 🦉 — Observe carefully. Think critically. Secure deliberately.**
