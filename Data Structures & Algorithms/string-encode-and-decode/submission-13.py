class Solution:

    def encode(self, strs: List[str]) -> str:
        if strs == []:
            return ""
        
        if strs == [""]:
            return "[""]"

        encoded = []
        for s in strs:
            encoded.append("=".join([f"{ord(c)}" for c in s]))
        return "@".join(encoded)

    def decode(self, s: str) -> List[str]:
        if s == "":
            return []

        if s == "[""]":
            return [""]

        decoded = []
        encoded = s.split("@")
        for s in encoded:
            s_list = s.split("=")
            decoded.append("".join(map(lambda x: chr(int(x)) if x else "", s_list)))
        return decoded