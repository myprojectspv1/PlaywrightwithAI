let responseTime = 850; //ms
let sla = 1000; //ms
let slaStatus = responseTime <= sla ? "SLA met✅ " : "SLA not met ❌";
//console.log(`Response:${responseTime} ms, SLA:${sla} ms, Status:${slaStatus}`);
console.log(`Response: ${responseTime}ms — ${slaStatus}`);