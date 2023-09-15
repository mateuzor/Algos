class Solution {
  transcribeToRNA(dnaSequence) {
    const complement = {
      G: "C",
      C: "G",
      T: "A",
      A: "U",
    };

    let rnaSequence = "";

    for (let i = 0; i < dnaSequence.length; i++) {
      const nucleotide = dnaSequence[i];
      rnaSequence += complement[nucleotide];
    }

    return rnaSequence;
  }
}

module.exports = Solution;
