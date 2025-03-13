function calculate_age(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms); 

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

let age = calculate_age(new Date(/* year = */ 1998,/* month = */ 3,/* day = */ 7));