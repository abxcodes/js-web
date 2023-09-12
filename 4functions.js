function umDecision(decision) {
    let isDecision = decision;

    isDecision ? ( () => {
        console.log("umpare decision is", isDecision);
    }) (): console.log();
}

umDecision("out");