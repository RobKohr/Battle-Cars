#pragma strict
var WheelFL: WheelCollider;
var WheelFR: WheelCollider;
var WheelRL: WheelCollider;
var WheelRR: WheelCollider;
var maxTorque: float = 50;
function Start () {
	GetComponent.<Rigidbody>().centerOfMass.y = -0.9;
}

function FixedUpdate () {
	WheelRR.motorTorque = -maxTorque * Input.GetAxis("Vertical");
	WheelRL.motorTorque = -maxTorque * Input.GetAxis("Vertical");
	WheelFL.steerAngle = 10 * Input.GetAxis("Horizontal");
	WheelFR.steerAngle = 10 * Input.GetAxis("Horizontal");
} 