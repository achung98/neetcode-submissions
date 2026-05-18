class Solution:

    def encode(self, strs: List[str]) -> str:
        if not len(strs):
            return "|"
        
        encodedStrs = []
        for s in strs:
            encodedStr = []
            for c in s:
                encodedStr.append(f"{ord(c)}" if c != "" else "")
            encodedStrs.append("#".join(encodedStr))
        
        return "|".join(encodedStrs)
        
    def decode(self, s: str) -> List[str]:
        if s == "|":
            return []
        
        encodedStrs = s.split("|")
        decodedStrs = []
        for encodedStr in encodedStrs:
            codes = encodedStr.split("#")
            decoded = ""
            for code in codes:
                decoded += chr(int(code)) if code != "" else ""
            decodedStrs.append(decoded)

        return decodedStrs

