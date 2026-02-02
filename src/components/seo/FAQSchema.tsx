import React from 'react';

export default function FAQSchema() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How often should we conduct risk assessments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Risk analysis should happen before every significant decision, not on a calendar schedule. Instead of annual risk workshops, integrate uncertainty analysis into your existing processes: budget planning (Monte Carlo simulation of cost ranges), capital allocation (decision trees comparing investment options), vendor selection (quantified risk scoring), and project approvals (probabilistic schedule analysis)."
                }
            },
            {
                "@type": "Question",
                "name": "How do we identify emerging risks?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The RM2 reframe: What new uncertainties could materially change the outcomes of our pending decisions? Model these uncertainties in your decision analysis, don't just list them in a register. Focus on specific uncertainties affecting your decision rather than abstract threats to catalog."
                }
            },
            {
                "@type": "Question",
                "name": "What's the difference between inherent and residual risk?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The RM2 question is: How do different mitigation options change the probability distribution of outcomes for this specific decision? The decision isn't about calculating residual risk scores—it's comparing expected value and risk exposure across options using decision trees or Monte Carlo simulation."
                }
            },
            {
                "@type": "Question",
                "name": "How should we prioritize our top risks?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prioritize decisions by their importance and uncertainty, not risks by subjective scores. Don't ask 'Which risk is #1 on our register?' Ask 'Which pending decisions have the highest stakes and greatest uncertainty?' Focus analytical resources where decision quality matters most."
                }
            },
            {
                "@type": "Question",
                "name": "How do we define our risk appetite?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "What probability of adverse outcomes are we willing to accept for different decision types, and at what magnitude? For example: 'For capital projects, we accept 10% probability of exceeding budget by more than 20%, but only 2% probability of exceeding by more than 40%.' These quantified thresholds actually guide decisions."
                }
            },
            {
                "@type": "Question",
                "name": "Should we use a 3×3 or 5×5 risk matrix?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Neither. Risk matrices introduce systematic mathematical errors and cognitive biases. Use quantitative methods proportional to the decision's importance: Simple scenario analysis for routine decisions, decision trees for medium-stakes decisions, and Monte Carlo simulation for complex, high-value decisions."
                }
            },
            {
                "@type": "Question",
                "name": "How do we connect risk management to strategy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In RM2, risk analysis IS strategic decision-making. Strategic planning without uncertainty analysis is just wishful thinking. When evaluating market entry, model the decision: What's the probability distribution of market size? Customer acquisition costs? Competitive response? The risk analysis and strategic analysis are the same activity."
                }
            },
            {
                "@type": "Question",
                "name": "How do we get executive buy-in for risk management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Show executives how quantitative risk analysis improves their specific pending decisions. Don't present risk registers or heat maps in board meetings. Instead show: 'Here's our capital allocation decision modeled three ways, showing probability of achieving target returns under different uncertainty scenarios.' Executives buy in when risk analysis demonstrates clear ROI."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
