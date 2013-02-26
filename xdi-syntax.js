/********************************************************************
APG - an ABNF Parser Generator
Copyright (C) 2009 Coast to Coast Research, Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see
<http://www.gnu.org/licenses/old-licenses/gpl-2.0.html>
or write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

author: Lowell Thomas
lowell@coasttocoastresearch.com
http://www.coasttocoastresearch.com

*********************************************************************/
function ABNFOpcodes()
{
    // SUMMARY
    // string table length: 116
    //               rules: 65
    //             opcodes: 389

    // string table
    this.stringTable = [];
    this.stringTable[0] = 47;
    this.stringTable[1] = 47;
    this.stringTable[2] = 61;
    this.stringTable[3] = 64;
    this.stringTable[4] = 43;
    this.stringTable[5] = 36;
    this.stringTable[6] = 42;
    this.stringTable[7] = 33;
    this.stringTable[8] = 40;
    this.stringTable[9] = 41;
    this.stringTable[10] = 40;
    this.stringTable[11] = 41;
    this.stringTable[12] = 40;
    this.stringTable[13] = 41;
    this.stringTable[14] = 40;
    this.stringTable[15] = 47;
    this.stringTable[16] = 41;
    this.stringTable[17] = 40;
    this.stringTable[18] = 41;
    this.stringTable[19] = 40;
    this.stringTable[20] = 41;
    this.stringTable[21] = 58;
    this.stringTable[22] = 63;
    this.stringTable[23] = 35;
    this.stringTable[24] = 43;
    this.stringTable[25] = 45;
    this.stringTable[26] = 46;
    this.stringTable[27] = 47;
    this.stringTable[28] = 47;
    this.stringTable[29] = 64;
    this.stringTable[30] = 58;
    this.stringTable[31] = 58;
    this.stringTable[32] = 91;
    this.stringTable[33] = 93;
    this.stringTable[34] = 118;
    this.stringTable[35] = 46;
    this.stringTable[36] = 58;
    this.stringTable[37] = 58;
    this.stringTable[38] = 58;
    this.stringTable[39] = 58;
    this.stringTable[40] = 58;
    this.stringTable[41] = 58;
    this.stringTable[42] = 58;
    this.stringTable[43] = 58;
    this.stringTable[44] = 58;
    this.stringTable[45] = 58;
    this.stringTable[46] = 58;
    this.stringTable[47] = 58;
    this.stringTable[48] = 58;
    this.stringTable[49] = 58;
    this.stringTable[50] = 58;
    this.stringTable[51] = 58;
    this.stringTable[52] = 58;
    this.stringTable[53] = 58;
    this.stringTable[54] = 58;
    this.stringTable[55] = 58;
    this.stringTable[56] = 58;
    this.stringTable[57] = 58;
    this.stringTable[58] = 58;
    this.stringTable[59] = 58;
    this.stringTable[60] = 58;
    this.stringTable[61] = 58;
    this.stringTable[62] = 58;
    this.stringTable[63] = 58;
    this.stringTable[64] = 58;
    this.stringTable[65] = 58;
    this.stringTable[66] = 46;
    this.stringTable[67] = 46;
    this.stringTable[68] = 46;
    this.stringTable[69] = 49;
    this.stringTable[70] = 50;
    this.stringTable[71] = 50;
    this.stringTable[72] = 53;
    this.stringTable[73] = 47;
    this.stringTable[74] = 47;
    this.stringTable[75] = 47;
    this.stringTable[76] = 47;
    this.stringTable[77] = 47;
    this.stringTable[78] = 63;
    this.stringTable[79] = 47;
    this.stringTable[80] = 63;
    this.stringTable[81] = 58;
    this.stringTable[82] = 64;
    this.stringTable[83] = 45;
    this.stringTable[84] = 46;
    this.stringTable[85] = 95;
    this.stringTable[86] = 126;
    this.stringTable[87] = 37;
    this.stringTable[88] = 58;
    this.stringTable[89] = 47;
    this.stringTable[90] = 63;
    this.stringTable[91] = 35;
    this.stringTable[92] = 91;
    this.stringTable[93] = 93;
    this.stringTable[94] = 64;
    this.stringTable[95] = 33;
    this.stringTable[96] = 36;
    this.stringTable[97] = 38;
    this.stringTable[98] = 39;
    this.stringTable[99] = 42;
    this.stringTable[100] = 43;
    this.stringTable[101] = 44;
    this.stringTable[102] = 59;
    this.stringTable[103] = 61;
    this.stringTable[104] = 45;
    this.stringTable[105] = 46;
    this.stringTable[106] = 95;
    this.stringTable[107] = 126;
    this.stringTable[108] = 48;
    this.stringTable[109] = 49;
    this.stringTable[110] = 65;
    this.stringTable[111] = 66;
    this.stringTable[112] = 67;
    this.stringTable[113] = 68;
    this.stringTable[114] = 69;
    this.stringTable[115] = 70;

    // rule identifiers
    this.ruleIds = [];
    this.ruleIds['xdi-context'] = 0;
    this.ruleIds['xdi-statement'] = 1;
    this.ruleIds['xdi-segment'] = 2;
    this.ruleIds.subseg = 3;
    this.ruleIds['global-subseg'] = 4;
    this.ruleIds['local-subseg'] = 5;
    this.ruleIds['gcs-char'] = 6;
    this.ruleIds['lcs-char'] = 7;
    this.ruleIds.xref = 8;
    this.ruleIds['xref-empty'] = 9;
    this.ruleIds['xref-iri'] = 10;
    this.ruleIds['xref-segment'] = 11;
    this.ruleIds['xref-two-segments'] = 12;
    this.ruleIds['xref-statement'] = 13;
    this.ruleIds['xref-literal'] = 14;
    this.ruleIds.literal = 15;
    this.ruleIds['xdi-pchar'] = 16;
    this.ruleIds.iri = 17;
    this.ruleIds.scheme = 18;
    this.ruleIds['ihier-part'] = 19;
    this.ruleIds.iauthority = 20;
    this.ruleIds.iuserinfo = 21;
    this.ruleIds.ihost = 22;
    this.ruleIds['ip-literal'] = 23;
    this.ruleIds.ipvfuture = 24;
    this.ruleIds.ipv6address = 25;
    this.ruleIds.ls32 = 26;
    this.ruleIds.h16 = 27;
    this.ruleIds.ipv4address = 28;
    this.ruleIds['dec-octet'] = 29;
    this.ruleIds['ireg-name'] = 30;
    this.ruleIds.port = 31;
    this.ruleIds['ipath-abempty'] = 32;
    this.ruleIds['ipath-abs'] = 33;
    this.ruleIds['ipath-rootless'] = 34;
    this.ruleIds['ipath-empty'] = 35;
    this.ruleIds.isegment = 36;
    this.ruleIds['isegment-nz'] = 37;
    this.ruleIds.iquery = 38;
    this.ruleIds.iprivate = 39;
    this.ruleIds.ifragment = 40;
    this.ruleIds.ipchar = 41;
    this.ruleIds.iunreserved = 42;
    this.ruleIds['pct-encoded'] = 43;
    this.ruleIds.ucschar = 44;
    this.ruleIds.reserved = 45;
    this.ruleIds['gen-delims'] = 46;
    this.ruleIds['sub-delims'] = 47;
    this.ruleIds.unreserved = 48;
    this.ruleIds.alpha = 49;
    this.ruleIds.bit = 50;
    this.ruleIds.char = 51;
    this.ruleIds.cr = 52;
    this.ruleIds.crlf = 53;
    this.ruleIds.ctl = 54;
    this.ruleIds.digit = 55;
    this.ruleIds.dquote = 56;
    this.ruleIds.hexdig = 57;
    this.ruleIds.htab = 58;
    this.ruleIds.lf = 59;
    this.ruleIds.lwsp = 60;
    this.ruleIds.octet = 61;
    this.ruleIds.sp = 62;
    this.ruleIds.vchar = 63;
    this.ruleIds.wsp = 64;

    // rule identifiers (alphabetical)
    this.ruleIds[0] = 49; // ALPHA
    this.ruleIds[1] = 50; // BIT
    this.ruleIds[2] = 51; // CHAR
    this.ruleIds[3] = 52; // CR
    this.ruleIds[4] = 53; // CRLF
    this.ruleIds[5] = 54; // CTL
    this.ruleIds[6] = 29; // dec-octet
    this.ruleIds[7] = 55; // DIGIT
    this.ruleIds[8] = 56; // DQUOTE
    this.ruleIds[9] = 6; // gcs-char
    this.ruleIds[10] = 46; // gen-delims
    this.ruleIds[11] = 4; // global-subseg
    this.ruleIds[12] = 27; // h16
    this.ruleIds[13] = 57; // HEXDIG
    this.ruleIds[14] = 58; // HTAB
    this.ruleIds[15] = 20; // iauthority
    this.ruleIds[16] = 40; // ifragment
    this.ruleIds[17] = 19; // ihier-part
    this.ruleIds[18] = 22; // ihost
    this.ruleIds[19] = 23; // IP-literal
    this.ruleIds[20] = 32; // ipath-abempty
    this.ruleIds[21] = 33; // ipath-abs
    this.ruleIds[22] = 35; // ipath-empty
    this.ruleIds[23] = 34; // ipath-rootless
    this.ruleIds[24] = 41; // ipchar
    this.ruleIds[25] = 39; // iprivate
    this.ruleIds[26] = 28; // IPv4address
    this.ruleIds[27] = 25; // IPv6address
    this.ruleIds[28] = 24; // IPvFuture
    this.ruleIds[29] = 38; // iquery
    this.ruleIds[30] = 30; // ireg-name
    this.ruleIds[31] = 17; // IRI
    this.ruleIds[32] = 36; // isegment
    this.ruleIds[33] = 37; // isegment-nz
    this.ruleIds[34] = 42; // iunreserved
    this.ruleIds[35] = 21; // iuserinfo
    this.ruleIds[36] = 7; // lcs-char
    this.ruleIds[37] = 59; // LF
    this.ruleIds[38] = 15; // literal
    this.ruleIds[39] = 5; // local-subseg
    this.ruleIds[40] = 26; // ls32
    this.ruleIds[41] = 60; // LWSP
    this.ruleIds[42] = 61; // OCTET
    this.ruleIds[43] = 43; // pct-encoded
    this.ruleIds[44] = 31; // port
    this.ruleIds[45] = 45; // reserved
    this.ruleIds[46] = 18; // scheme
    this.ruleIds[47] = 62; // SP
    this.ruleIds[48] = 47; // sub-delims
    this.ruleIds[49] = 3; // subseg
    this.ruleIds[50] = 44; // ucschar
    this.ruleIds[51] = 48; // unreserved
    this.ruleIds[52] = 63; // VCHAR
    this.ruleIds[53] = 64; // WSP
    this.ruleIds[54] = 0; // xdi-context
    this.ruleIds[55] = 16; // xdi-pchar
    this.ruleIds[56] = 2; // xdi-segment
    this.ruleIds[57] = 1; // xdi-statement
    this.ruleIds[58] = 8; // xref
    this.ruleIds[59] = 9; // xref-empty
    this.ruleIds[60] = 10; // xref-IRI
    this.ruleIds[61] = 14; // xref-literal
    this.ruleIds[62] = 11; // xref-segment
    this.ruleIds[63] = 13; // xref-statement
    this.ruleIds[64] = 12; // xref-two-segments

    // rules
    this.rules = [];
    this.rules[0] = [];
    this.rules[0].rule = 'xdi-context';
    this.rules[0].lower = 'xdi-context';
    this.rules[0].syntax = null;
    this.rules[0].semantic = null;
    this.rules[0].opcodeIndex = 0;

    this.rules[1] = [];
    this.rules[1].rule = 'xdi-statement';
    this.rules[1].lower = 'xdi-statement';
    this.rules[1].syntax = null;
    this.rules[1].semantic = null;
    this.rules[1].opcodeIndex = 1;

    this.rules[2] = [];
    this.rules[2].rule = 'xdi-segment';
    this.rules[2].lower = 'xdi-segment';
    this.rules[2].syntax = null;
    this.rules[2].semantic = null;
    this.rules[2].opcodeIndex = 7;

    this.rules[3] = [];
    this.rules[3].rule = 'subseg';
    this.rules[3].lower = 'subseg';
    this.rules[3].syntax = null;
    this.rules[3].semantic = null;
    this.rules[3].opcodeIndex = 9;

    this.rules[4] = [];
    this.rules[4].rule = 'global-subseg';
    this.rules[4].lower = 'global-subseg';
    this.rules[4].syntax = null;
    this.rules[4].semantic = null;
    this.rules[4].opcodeIndex = 13;

    this.rules[5] = [];
    this.rules[5].rule = 'local-subseg';
    this.rules[5].lower = 'local-subseg';
    this.rules[5].syntax = null;
    this.rules[5].semantic = null;
    this.rules[5].opcodeIndex = 20;

    this.rules[6] = [];
    this.rules[6].rule = 'gcs-char';
    this.rules[6].lower = 'gcs-char';
    this.rules[6].syntax = null;
    this.rules[6].semantic = null;
    this.rules[6].opcodeIndex = 26;

    this.rules[7] = [];
    this.rules[7].rule = 'lcs-char';
    this.rules[7].lower = 'lcs-char';
    this.rules[7].syntax = null;
    this.rules[7].semantic = null;
    this.rules[7].opcodeIndex = 31;

    this.rules[8] = [];
    this.rules[8].rule = 'xref';
    this.rules[8].lower = 'xref';
    this.rules[8].syntax = null;
    this.rules[8].semantic = null;
    this.rules[8].opcodeIndex = 34;

    this.rules[9] = [];
    this.rules[9].rule = 'xref-empty';
    this.rules[9].lower = 'xref-empty';
    this.rules[9].syntax = null;
    this.rules[9].semantic = null;
    this.rules[9].opcodeIndex = 41;

    this.rules[10] = [];
    this.rules[10].rule = 'xref-IRI';
    this.rules[10].lower = 'xref-iri';
    this.rules[10].syntax = null;
    this.rules[10].semantic = null;
    this.rules[10].opcodeIndex = 42;

    this.rules[11] = [];
    this.rules[11].rule = 'xref-segment';
    this.rules[11].lower = 'xref-segment';
    this.rules[11].syntax = null;
    this.rules[11].semantic = null;
    this.rules[11].opcodeIndex = 46;

    this.rules[12] = [];
    this.rules[12].rule = 'xref-two-segments';
    this.rules[12].lower = 'xref-two-segments';
    this.rules[12].syntax = null;
    this.rules[12].semantic = null;
    this.rules[12].opcodeIndex = 50;

    this.rules[13] = [];
    this.rules[13].rule = 'xref-statement';
    this.rules[13].lower = 'xref-statement';
    this.rules[13].syntax = null;
    this.rules[13].semantic = null;
    this.rules[13].opcodeIndex = 56;

    this.rules[14] = [];
    this.rules[14].rule = 'xref-literal';
    this.rules[14].lower = 'xref-literal';
    this.rules[14].syntax = null;
    this.rules[14].semantic = null;
    this.rules[14].opcodeIndex = 60;

    this.rules[15] = [];
    this.rules[15].rule = 'literal';
    this.rules[15].lower = 'literal';
    this.rules[15].syntax = null;
    this.rules[15].semantic = null;
    this.rules[15].opcodeIndex = 64;

    this.rules[16] = [];
    this.rules[16].rule = 'xdi-pchar';
    this.rules[16].lower = 'xdi-pchar';
    this.rules[16].syntax = null;
    this.rules[16].semantic = null;
    this.rules[16].opcodeIndex = 66;

    this.rules[17] = [];
    this.rules[17].rule = 'IRI';
    this.rules[17].lower = 'iri';
    this.rules[17].syntax = null;
    this.rules[17].semantic = null;
    this.rules[17].opcodeIndex = 69;

    this.rules[18] = [];
    this.rules[18].rule = 'scheme';
    this.rules[18].lower = 'scheme';
    this.rules[18].syntax = null;
    this.rules[18].semantic = null;
    this.rules[18].opcodeIndex = 81;

    this.rules[19] = [];
    this.rules[19].rule = 'ihier-part';
    this.rules[19].lower = 'ihier-part';
    this.rules[19].syntax = null;
    this.rules[19].semantic = null;
    this.rules[19].opcodeIndex = 90;

    this.rules[20] = [];
    this.rules[20].rule = 'iauthority';
    this.rules[20].lower = 'iauthority';
    this.rules[20].syntax = null;
    this.rules[20].semantic = null;
    this.rules[20].opcodeIndex = 98;

    this.rules[21] = [];
    this.rules[21].rule = 'iuserinfo';
    this.rules[21].lower = 'iuserinfo';
    this.rules[21].syntax = null;
    this.rules[21].semantic = null;
    this.rules[21].opcodeIndex = 108;

    this.rules[22] = [];
    this.rules[22].rule = 'ihost';
    this.rules[22].lower = 'ihost';
    this.rules[22].syntax = null;
    this.rules[22].semantic = null;
    this.rules[22].opcodeIndex = 114;

    this.rules[23] = [];
    this.rules[23].rule = 'IP-literal';
    this.rules[23].lower = 'ip-literal';
    this.rules[23].syntax = null;
    this.rules[23].semantic = null;
    this.rules[23].opcodeIndex = 118;

    this.rules[24] = [];
    this.rules[24].rule = 'IPvFuture';
    this.rules[24].lower = 'ipvfuture';
    this.rules[24].syntax = null;
    this.rules[24].semantic = null;
    this.rules[24].opcodeIndex = 124;

    this.rules[25] = [];
    this.rules[25].rule = 'IPv6address';
    this.rules[25].lower = 'ipv6address';
    this.rules[25].syntax = null;
    this.rules[25].semantic = null;
    this.rules[25].opcodeIndex = 134;

    this.rules[26] = [];
    this.rules[26].rule = 'ls32';
    this.rules[26].lower = 'ls32';
    this.rules[26].syntax = null;
    this.rules[26].semantic = null;
    this.rules[26].opcodeIndex = 226;

    this.rules[27] = [];
    this.rules[27].rule = 'h16';
    this.rules[27].lower = 'h16';
    this.rules[27].syntax = null;
    this.rules[27].semantic = null;
    this.rules[27].opcodeIndex = 232;

    this.rules[28] = [];
    this.rules[28].rule = 'IPv4address';
    this.rules[28].lower = 'ipv4address';
    this.rules[28].syntax = null;
    this.rules[28].semantic = null;
    this.rules[28].opcodeIndex = 234;

    this.rules[29] = [];
    this.rules[29].rule = 'dec-octet';
    this.rules[29].lower = 'dec-octet';
    this.rules[29].syntax = null;
    this.rules[29].semantic = null;
    this.rules[29].opcodeIndex = 242;

    this.rules[30] = [];
    this.rules[30].rule = 'ireg-name';
    this.rules[30].lower = 'ireg-name';
    this.rules[30].syntax = null;
    this.rules[30].semantic = null;
    this.rules[30].opcodeIndex = 258;

    this.rules[31] = [];
    this.rules[31].rule = 'port';
    this.rules[31].lower = 'port';
    this.rules[31].syntax = null;
    this.rules[31].semantic = null;
    this.rules[31].opcodeIndex = 263;

    this.rules[32] = [];
    this.rules[32].rule = 'ipath-abempty';
    this.rules[32].lower = 'ipath-abempty';
    this.rules[32].syntax = null;
    this.rules[32].semantic = null;
    this.rules[32].opcodeIndex = 265;

    this.rules[33] = [];
    this.rules[33].rule = 'ipath-abs';
    this.rules[33].lower = 'ipath-abs';
    this.rules[33].syntax = null;
    this.rules[33].semantic = null;
    this.rules[33].opcodeIndex = 269;

    this.rules[34] = [];
    this.rules[34].rule = 'ipath-rootless';
    this.rules[34].lower = 'ipath-rootless';
    this.rules[34].syntax = null;
    this.rules[34].semantic = null;
    this.rules[34].opcodeIndex = 278;

    this.rules[35] = [];
    this.rules[35].rule = 'ipath-empty';
    this.rules[35].lower = 'ipath-empty';
    this.rules[35].syntax = null;
    this.rules[35].semantic = null;
    this.rules[35].opcodeIndex = 284;

    this.rules[36] = [];
    this.rules[36].rule = 'isegment';
    this.rules[36].lower = 'isegment';
    this.rules[36].syntax = null;
    this.rules[36].semantic = null;
    this.rules[36].opcodeIndex = 285;

    this.rules[37] = [];
    this.rules[37].rule = 'isegment-nz';
    this.rules[37].lower = 'isegment-nz';
    this.rules[37].syntax = null;
    this.rules[37].semantic = null;
    this.rules[37].opcodeIndex = 287;

    this.rules[38] = [];
    this.rules[38].rule = 'iquery';
    this.rules[38].lower = 'iquery';
    this.rules[38].syntax = null;
    this.rules[38].semantic = null;
    this.rules[38].opcodeIndex = 289;

    this.rules[39] = [];
    this.rules[39].rule = 'iprivate';
    this.rules[39].lower = 'iprivate';
    this.rules[39].syntax = null;
    this.rules[39].semantic = null;
    this.rules[39].opcodeIndex = 295;

    this.rules[40] = [];
    this.rules[40].rule = 'ifragment';
    this.rules[40].lower = 'ifragment';
    this.rules[40].syntax = null;
    this.rules[40].semantic = null;
    this.rules[40].opcodeIndex = 296;

    this.rules[41] = [];
    this.rules[41].rule = 'ipchar';
    this.rules[41].lower = 'ipchar';
    this.rules[41].syntax = null;
    this.rules[41].semantic = null;
    this.rules[41].opcodeIndex = 301;

    this.rules[42] = [];
    this.rules[42].rule = 'iunreserved';
    this.rules[42].lower = 'iunreserved';
    this.rules[42].syntax = null;
    this.rules[42].semantic = null;
    this.rules[42].opcodeIndex = 307;

    this.rules[43] = [];
    this.rules[43].rule = 'pct-encoded';
    this.rules[43].lower = 'pct-encoded';
    this.rules[43].syntax = null;
    this.rules[43].semantic = null;
    this.rules[43].opcodeIndex = 315;

    this.rules[44] = [];
    this.rules[44].rule = 'ucschar';
    this.rules[44].lower = 'ucschar';
    this.rules[44].syntax = null;
    this.rules[44].semantic = null;
    this.rules[44].opcodeIndex = 319;

    this.rules[45] = [];
    this.rules[45].rule = 'reserved';
    this.rules[45].lower = 'reserved';
    this.rules[45].syntax = null;
    this.rules[45].semantic = null;
    this.rules[45].opcodeIndex = 323;

    this.rules[46] = [];
    this.rules[46].rule = 'gen-delims';
    this.rules[46].lower = 'gen-delims';
    this.rules[46].syntax = null;
    this.rules[46].semantic = null;
    this.rules[46].opcodeIndex = 326;

    this.rules[47] = [];
    this.rules[47].rule = 'sub-delims';
    this.rules[47].lower = 'sub-delims';
    this.rules[47].syntax = null;
    this.rules[47].semantic = null;
    this.rules[47].opcodeIndex = 334;

    this.rules[48] = [];
    this.rules[48].rule = 'unreserved';
    this.rules[48].lower = 'unreserved';
    this.rules[48].syntax = null;
    this.rules[48].semantic = null;
    this.rules[48].opcodeIndex = 344;

    this.rules[49] = [];
    this.rules[49].rule = 'ALPHA';
    this.rules[49].lower = 'alpha';
    this.rules[49].syntax = null;
    this.rules[49].semantic = null;
    this.rules[49].opcodeIndex = 351;

    this.rules[50] = [];
    this.rules[50].rule = 'BIT';
    this.rules[50].lower = 'bit';
    this.rules[50].syntax = null;
    this.rules[50].semantic = null;
    this.rules[50].opcodeIndex = 354;

    this.rules[51] = [];
    this.rules[51].rule = 'CHAR';
    this.rules[51].lower = 'char';
    this.rules[51].syntax = null;
    this.rules[51].semantic = null;
    this.rules[51].opcodeIndex = 357;

    this.rules[52] = [];
    this.rules[52].rule = 'CR';
    this.rules[52].lower = 'cr';
    this.rules[52].syntax = null;
    this.rules[52].semantic = null;
    this.rules[52].opcodeIndex = 358;

    this.rules[53] = [];
    this.rules[53].rule = 'CRLF';
    this.rules[53].lower = 'crlf';
    this.rules[53].syntax = null;
    this.rules[53].semantic = null;
    this.rules[53].opcodeIndex = 359;

    this.rules[54] = [];
    this.rules[54].rule = 'CTL';
    this.rules[54].lower = 'ctl';
    this.rules[54].syntax = null;
    this.rules[54].semantic = null;
    this.rules[54].opcodeIndex = 362;

    this.rules[55] = [];
    this.rules[55].rule = 'DIGIT';
    this.rules[55].lower = 'digit';
    this.rules[55].syntax = null;
    this.rules[55].semantic = null;
    this.rules[55].opcodeIndex = 365;

    this.rules[56] = [];
    this.rules[56].rule = 'DQUOTE';
    this.rules[56].lower = 'dquote';
    this.rules[56].syntax = null;
    this.rules[56].semantic = null;
    this.rules[56].opcodeIndex = 366;

    this.rules[57] = [];
    this.rules[57].rule = 'HEXDIG';
    this.rules[57].lower = 'hexdig';
    this.rules[57].syntax = null;
    this.rules[57].semantic = null;
    this.rules[57].opcodeIndex = 367;

    this.rules[58] = [];
    this.rules[58].rule = 'HTAB';
    this.rules[58].lower = 'htab';
    this.rules[58].syntax = null;
    this.rules[58].semantic = null;
    this.rules[58].opcodeIndex = 375;

    this.rules[59] = [];
    this.rules[59].rule = 'LF';
    this.rules[59].lower = 'lf';
    this.rules[59].syntax = null;
    this.rules[59].semantic = null;
    this.rules[59].opcodeIndex = 376;

    this.rules[60] = [];
    this.rules[60].rule = 'LWSP';
    this.rules[60].lower = 'lwsp';
    this.rules[60].syntax = null;
    this.rules[60].semantic = null;
    this.rules[60].opcodeIndex = 377;

    this.rules[61] = [];
    this.rules[61].rule = 'OCTET';
    this.rules[61].lower = 'octet';
    this.rules[61].syntax = null;
    this.rules[61].semantic = null;
    this.rules[61].opcodeIndex = 383;

    this.rules[62] = [];
    this.rules[62].rule = 'SP';
    this.rules[62].lower = 'sp';
    this.rules[62].syntax = null;
    this.rules[62].semantic = null;
    this.rules[62].opcodeIndex = 384;

    this.rules[63] = [];
    this.rules[63].rule = 'VCHAR';
    this.rules[63].lower = 'vchar';
    this.rules[63].syntax = null;
    this.rules[63].semantic = null;
    this.rules[63].opcodeIndex = 385;

    this.rules[64] = [];
    this.rules[64].rule = 'WSP';
    this.rules[64].lower = 'wsp';
    this.rules[64].syntax = null;
    this.rules[64].semantic = null;
    this.rules[64].opcodeIndex = 386;

    // opcodes
    this.opcodes = [];
    this.opcodes[0] = [];
    this.opcodes[0].opNext = 1;
    this.opcodes[0].type = RNM;
    this.opcodes[0].ruleIndex = 2;

    this.opcodes[1] = [];
    this.opcodes[1].opNext = 7;
    this.opcodes[1].type = CAT;

    this.opcodes[2] = [];
    this.opcodes[2].opNext = 3;
    this.opcodes[2].type = RNM;
    this.opcodes[2].ruleIndex = 2;

    this.opcodes[3] = [];
    this.opcodes[3].opNext = 4;
    this.opcodes[3].type = TLS;
    this.opcodes[3].length = 1;
    this.opcodes[3].stringIndex = 0;

    this.opcodes[4] = [];
    this.opcodes[4].opNext = 5;
    this.opcodes[4].type = RNM;
    this.opcodes[4].ruleIndex = 2;

    this.opcodes[5] = [];
    this.opcodes[5].opNext = 6;
    this.opcodes[5].type = TLS;
    this.opcodes[5].length = 1;
    this.opcodes[5].stringIndex = 1;

    this.opcodes[6] = [];
    this.opcodes[6].opNext = 7;
    this.opcodes[6].type = RNM;
    this.opcodes[6].ruleIndex = 2;

    this.opcodes[7] = [];
    this.opcodes[7].opNext = 9;
    this.opcodes[7].type = REP;
    this.opcodes[7].min = 1;
    this.opcodes[7].max = Infinity;

    this.opcodes[8] = [];
    this.opcodes[8].opNext = 9;
    this.opcodes[8].type = RNM;
    this.opcodes[8].ruleIndex = 3;

    this.opcodes[9] = [];
    this.opcodes[9].opNext = 13;
    this.opcodes[9].type = ALT;

    this.opcodes[10] = [];
    this.opcodes[10].opNext = 11;
    this.opcodes[10].type = RNM;
    this.opcodes[10].ruleIndex = 4;

    this.opcodes[11] = [];
    this.opcodes[11].opNext = 12;
    this.opcodes[11].type = RNM;
    this.opcodes[11].ruleIndex = 5;

    this.opcodes[12] = [];
    this.opcodes[12].opNext = 13;
    this.opcodes[12].type = RNM;
    this.opcodes[12].ruleIndex = 8;

    this.opcodes[13] = [];
    this.opcodes[13].opNext = 20;
    this.opcodes[13].type = CAT;

    this.opcodes[14] = [];
    this.opcodes[14].opNext = 15;
    this.opcodes[14].type = RNM;
    this.opcodes[14].ruleIndex = 6;

    this.opcodes[15] = [];
    this.opcodes[15].opNext = 20;
    this.opcodes[15].type = REP;
    this.opcodes[15].min = 0;
    this.opcodes[15].max = 1;

    this.opcodes[16] = [];
    this.opcodes[16].opNext = 20;
    this.opcodes[16].type = ALT;

    this.opcodes[17] = [];
    this.opcodes[17].opNext = 18;
    this.opcodes[17].type = RNM;
    this.opcodes[17].ruleIndex = 5;

    this.opcodes[18] = [];
    this.opcodes[18].opNext = 19;
    this.opcodes[18].type = RNM;
    this.opcodes[18].ruleIndex = 8;

    this.opcodes[19] = [];
    this.opcodes[19].opNext = 20;
    this.opcodes[19].type = RNM;
    this.opcodes[19].ruleIndex = 15;

    this.opcodes[20] = [];
    this.opcodes[20].opNext = 26;
    this.opcodes[20].type = CAT;

    this.opcodes[21] = [];
    this.opcodes[21].opNext = 22;
    this.opcodes[21].type = RNM;
    this.opcodes[21].ruleIndex = 7;

    this.opcodes[22] = [];
    this.opcodes[22].opNext = 26;
    this.opcodes[22].type = REP;
    this.opcodes[22].min = 0;
    this.opcodes[22].max = 1;

    this.opcodes[23] = [];
    this.opcodes[23].opNext = 26;
    this.opcodes[23].type = ALT;

    this.opcodes[24] = [];
    this.opcodes[24].opNext = 25;
    this.opcodes[24].type = RNM;
    this.opcodes[24].ruleIndex = 8;

    this.opcodes[25] = [];
    this.opcodes[25].opNext = 26;
    this.opcodes[25].type = RNM;
    this.opcodes[25].ruleIndex = 15;

    this.opcodes[26] = [];
    this.opcodes[26].opNext = 31;
    this.opcodes[26].type = ALT;

    this.opcodes[27] = [];
    this.opcodes[27].opNext = 28;
    this.opcodes[27].type = TLS;
    this.opcodes[27].length = 1;
    this.opcodes[27].stringIndex = 2;

    this.opcodes[28] = [];
    this.opcodes[28].opNext = 29;
    this.opcodes[28].type = TLS;
    this.opcodes[28].length = 1;
    this.opcodes[28].stringIndex = 3;

    this.opcodes[29] = [];
    this.opcodes[29].opNext = 30;
    this.opcodes[29].type = TLS;
    this.opcodes[29].length = 1;
    this.opcodes[29].stringIndex = 4;

    this.opcodes[30] = [];
    this.opcodes[30].opNext = 31;
    this.opcodes[30].type = TLS;
    this.opcodes[30].length = 1;
    this.opcodes[30].stringIndex = 5;

    this.opcodes[31] = [];
    this.opcodes[31].opNext = 34;
    this.opcodes[31].type = ALT;

    this.opcodes[32] = [];
    this.opcodes[32].opNext = 33;
    this.opcodes[32].type = TLS;
    this.opcodes[32].length = 1;
    this.opcodes[32].stringIndex = 6;

    this.opcodes[33] = [];
    this.opcodes[33].opNext = 34;
    this.opcodes[33].type = TLS;
    this.opcodes[33].length = 1;
    this.opcodes[33].stringIndex = 7;

    this.opcodes[34] = [];
    this.opcodes[34].opNext = 41;
    this.opcodes[34].type = ALT;

    this.opcodes[35] = [];
    this.opcodes[35].opNext = 36;
    this.opcodes[35].type = RNM;
    this.opcodes[35].ruleIndex = 9;

    this.opcodes[36] = [];
    this.opcodes[36].opNext = 37;
    this.opcodes[36].type = RNM;
    this.opcodes[36].ruleIndex = 10;

    this.opcodes[37] = [];
    this.opcodes[37].opNext = 38;
    this.opcodes[37].type = RNM;
    this.opcodes[37].ruleIndex = 11;

    this.opcodes[38] = [];
    this.opcodes[38].opNext = 39;
    this.opcodes[38].type = RNM;
    this.opcodes[38].ruleIndex = 12;

    this.opcodes[39] = [];
    this.opcodes[39].opNext = 40;
    this.opcodes[39].type = RNM;
    this.opcodes[39].ruleIndex = 13;

    this.opcodes[40] = [];
    this.opcodes[40].opNext = 41;
    this.opcodes[40].type = RNM;
    this.opcodes[40].ruleIndex = 14;

    this.opcodes[41] = [];
    this.opcodes[41].opNext = 42;
    this.opcodes[41].type = TLS;
    this.opcodes[41].length = 2;
    this.opcodes[41].stringIndex = 8;

    this.opcodes[42] = [];
    this.opcodes[42].opNext = 46;
    this.opcodes[42].type = CAT;

    this.opcodes[43] = [];
    this.opcodes[43].opNext = 44;
    this.opcodes[43].type = TLS;
    this.opcodes[43].length = 1;
    this.opcodes[43].stringIndex = 10;

    this.opcodes[44] = [];
    this.opcodes[44].opNext = 45;
    this.opcodes[44].type = RNM;
    this.opcodes[44].ruleIndex = 17;

    this.opcodes[45] = [];
    this.opcodes[45].opNext = 46;
    this.opcodes[45].type = TLS;
    this.opcodes[45].length = 1;
    this.opcodes[45].stringIndex = 11;

    this.opcodes[46] = [];
    this.opcodes[46].opNext = 50;
    this.opcodes[46].type = CAT;

    this.opcodes[47] = [];
    this.opcodes[47].opNext = 48;
    this.opcodes[47].type = TLS;
    this.opcodes[47].length = 1;
    this.opcodes[47].stringIndex = 12;

    this.opcodes[48] = [];
    this.opcodes[48].opNext = 49;
    this.opcodes[48].type = RNM;
    this.opcodes[48].ruleIndex = 2;

    this.opcodes[49] = [];
    this.opcodes[49].opNext = 50;
    this.opcodes[49].type = TLS;
    this.opcodes[49].length = 1;
    this.opcodes[49].stringIndex = 13;

    this.opcodes[50] = [];
    this.opcodes[50].opNext = 56;
    this.opcodes[50].type = CAT;

    this.opcodes[51] = [];
    this.opcodes[51].opNext = 52;
    this.opcodes[51].type = TLS;
    this.opcodes[51].length = 1;
    this.opcodes[51].stringIndex = 14;

    this.opcodes[52] = [];
    this.opcodes[52].opNext = 53;
    this.opcodes[52].type = RNM;
    this.opcodes[52].ruleIndex = 2;

    this.opcodes[53] = [];
    this.opcodes[53].opNext = 54;
    this.opcodes[53].type = TLS;
    this.opcodes[53].length = 1;
    this.opcodes[53].stringIndex = 15;

    this.opcodes[54] = [];
    this.opcodes[54].opNext = 55;
    this.opcodes[54].type = RNM;
    this.opcodes[54].ruleIndex = 2;

    this.opcodes[55] = [];
    this.opcodes[55].opNext = 56;
    this.opcodes[55].type = TLS;
    this.opcodes[55].length = 1;
    this.opcodes[55].stringIndex = 16;

    this.opcodes[56] = [];
    this.opcodes[56].opNext = 60;
    this.opcodes[56].type = CAT;

    this.opcodes[57] = [];
    this.opcodes[57].opNext = 58;
    this.opcodes[57].type = TLS;
    this.opcodes[57].length = 1;
    this.opcodes[57].stringIndex = 17;

    this.opcodes[58] = [];
    this.opcodes[58].opNext = 59;
    this.opcodes[58].type = RNM;
    this.opcodes[58].ruleIndex = 1;

    this.opcodes[59] = [];
    this.opcodes[59].opNext = 60;
    this.opcodes[59].type = TLS;
    this.opcodes[59].length = 1;
    this.opcodes[59].stringIndex = 18;

    this.opcodes[60] = [];
    this.opcodes[60].opNext = 64;
    this.opcodes[60].type = CAT;

    this.opcodes[61] = [];
    this.opcodes[61].opNext = 62;
    this.opcodes[61].type = TLS;
    this.opcodes[61].length = 1;
    this.opcodes[61].stringIndex = 19;

    this.opcodes[62] = [];
    this.opcodes[62].opNext = 63;
    this.opcodes[62].type = RNM;
    this.opcodes[62].ruleIndex = 15;

    this.opcodes[63] = [];
    this.opcodes[63].opNext = 64;
    this.opcodes[63].type = TLS;
    this.opcodes[63].length = 1;
    this.opcodes[63].stringIndex = 20;

    this.opcodes[64] = [];
    this.opcodes[64].opNext = 66;
    this.opcodes[64].type = REP;
    this.opcodes[64].min = 1;
    this.opcodes[64].max = Infinity;

    this.opcodes[65] = [];
    this.opcodes[65].opNext = 66;
    this.opcodes[65].type = RNM;
    this.opcodes[65].ruleIndex = 16;

    this.opcodes[66] = [];
    this.opcodes[66].opNext = 69;
    this.opcodes[66].type = ALT;

    this.opcodes[67] = [];
    this.opcodes[67].opNext = 68;
    this.opcodes[67].type = RNM;
    this.opcodes[67].ruleIndex = 42;

    this.opcodes[68] = [];
    this.opcodes[68].opNext = 69;
    this.opcodes[68].type = RNM;
    this.opcodes[68].ruleIndex = 43;

    this.opcodes[69] = [];
    this.opcodes[69].opNext = 81;
    this.opcodes[69].type = CAT;

    this.opcodes[70] = [];
    this.opcodes[70].opNext = 71;
    this.opcodes[70].type = RNM;
    this.opcodes[70].ruleIndex = 18;

    this.opcodes[71] = [];
    this.opcodes[71].opNext = 72;
    this.opcodes[71].type = TLS;
    this.opcodes[71].length = 1;
    this.opcodes[71].stringIndex = 21;

    this.opcodes[72] = [];
    this.opcodes[72].opNext = 73;
    this.opcodes[72].type = RNM;
    this.opcodes[72].ruleIndex = 19;

    this.opcodes[73] = [];
    this.opcodes[73].opNext = 77;
    this.opcodes[73].type = REP;
    this.opcodes[73].min = 0;
    this.opcodes[73].max = 1;

    this.opcodes[74] = [];
    this.opcodes[74].opNext = 77;
    this.opcodes[74].type = CAT;

    this.opcodes[75] = [];
    this.opcodes[75].opNext = 76;
    this.opcodes[75].type = TLS;
    this.opcodes[75].length = 1;
    this.opcodes[75].stringIndex = 22;

    this.opcodes[76] = [];
    this.opcodes[76].opNext = 77;
    this.opcodes[76].type = RNM;
    this.opcodes[76].ruleIndex = 38;

    this.opcodes[77] = [];
    this.opcodes[77].opNext = 81;
    this.opcodes[77].type = REP;
    this.opcodes[77].min = 0;
    this.opcodes[77].max = 1;

    this.opcodes[78] = [];
    this.opcodes[78].opNext = 81;
    this.opcodes[78].type = CAT;

    this.opcodes[79] = [];
    this.opcodes[79].opNext = 80;
    this.opcodes[79].type = TLS;
    this.opcodes[79].length = 1;
    this.opcodes[79].stringIndex = 23;

    this.opcodes[80] = [];
    this.opcodes[80].opNext = 81;
    this.opcodes[80].type = RNM;
    this.opcodes[80].ruleIndex = 40;

    this.opcodes[81] = [];
    this.opcodes[81].opNext = 90;
    this.opcodes[81].type = CAT;

    this.opcodes[82] = [];
    this.opcodes[82].opNext = 83;
    this.opcodes[82].type = RNM;
    this.opcodes[82].ruleIndex = 49;

    this.opcodes[83] = [];
    this.opcodes[83].opNext = 90;
    this.opcodes[83].type = REP;
    this.opcodes[83].min = 0;
    this.opcodes[83].max = Infinity;

    this.opcodes[84] = [];
    this.opcodes[84].opNext = 90;
    this.opcodes[84].type = ALT;

    this.opcodes[85] = [];
    this.opcodes[85].opNext = 86;
    this.opcodes[85].type = RNM;
    this.opcodes[85].ruleIndex = 49;

    this.opcodes[86] = [];
    this.opcodes[86].opNext = 87;
    this.opcodes[86].type = RNM;
    this.opcodes[86].ruleIndex = 55;

    this.opcodes[87] = [];
    this.opcodes[87].opNext = 88;
    this.opcodes[87].type = TLS;
    this.opcodes[87].length = 1;
    this.opcodes[87].stringIndex = 24;

    this.opcodes[88] = [];
    this.opcodes[88].opNext = 89;
    this.opcodes[88].type = TLS;
    this.opcodes[88].length = 1;
    this.opcodes[88].stringIndex = 25;

    this.opcodes[89] = [];
    this.opcodes[89].opNext = 90;
    this.opcodes[89].type = TLS;
    this.opcodes[89].length = 1;
    this.opcodes[89].stringIndex = 26;

    this.opcodes[90] = [];
    this.opcodes[90].opNext = 98;
    this.opcodes[90].type = ALT;

    this.opcodes[91] = [];
    this.opcodes[91].opNext = 95;
    this.opcodes[91].type = CAT;

    this.opcodes[92] = [];
    this.opcodes[92].opNext = 93;
    this.opcodes[92].type = TLS;
    this.opcodes[92].length = 2;
    this.opcodes[92].stringIndex = 27;

    this.opcodes[93] = [];
    this.opcodes[93].opNext = 94;
    this.opcodes[93].type = RNM;
    this.opcodes[93].ruleIndex = 20;

    this.opcodes[94] = [];
    this.opcodes[94].opNext = 95;
    this.opcodes[94].type = RNM;
    this.opcodes[94].ruleIndex = 32;

    this.opcodes[95] = [];
    this.opcodes[95].opNext = 96;
    this.opcodes[95].type = RNM;
    this.opcodes[95].ruleIndex = 33;

    this.opcodes[96] = [];
    this.opcodes[96].opNext = 97;
    this.opcodes[96].type = RNM;
    this.opcodes[96].ruleIndex = 34;

    this.opcodes[97] = [];
    this.opcodes[97].opNext = 98;
    this.opcodes[97].type = RNM;
    this.opcodes[97].ruleIndex = 35;

    this.opcodes[98] = [];
    this.opcodes[98].opNext = 108;
    this.opcodes[98].type = CAT;

    this.opcodes[99] = [];
    this.opcodes[99].opNext = 103;
    this.opcodes[99].type = REP;
    this.opcodes[99].min = 0;
    this.opcodes[99].max = 1;

    this.opcodes[100] = [];
    this.opcodes[100].opNext = 103;
    this.opcodes[100].type = CAT;

    this.opcodes[101] = [];
    this.opcodes[101].opNext = 102;
    this.opcodes[101].type = RNM;
    this.opcodes[101].ruleIndex = 21;

    this.opcodes[102] = [];
    this.opcodes[102].opNext = 103;
    this.opcodes[102].type = TLS;
    this.opcodes[102].length = 1;
    this.opcodes[102].stringIndex = 29;

    this.opcodes[103] = [];
    this.opcodes[103].opNext = 104;
    this.opcodes[103].type = RNM;
    this.opcodes[103].ruleIndex = 22;

    this.opcodes[104] = [];
    this.opcodes[104].opNext = 108;
    this.opcodes[104].type = REP;
    this.opcodes[104].min = 0;
    this.opcodes[104].max = 1;

    this.opcodes[105] = [];
    this.opcodes[105].opNext = 108;
    this.opcodes[105].type = CAT;

    this.opcodes[106] = [];
    this.opcodes[106].opNext = 107;
    this.opcodes[106].type = TLS;
    this.opcodes[106].length = 1;
    this.opcodes[106].stringIndex = 30;

    this.opcodes[107] = [];
    this.opcodes[107].opNext = 108;
    this.opcodes[107].type = RNM;
    this.opcodes[107].ruleIndex = 31;

    this.opcodes[108] = [];
    this.opcodes[108].opNext = 114;
    this.opcodes[108].type = REP;
    this.opcodes[108].min = 0;
    this.opcodes[108].max = Infinity;

    this.opcodes[109] = [];
    this.opcodes[109].opNext = 114;
    this.opcodes[109].type = ALT;

    this.opcodes[110] = [];
    this.opcodes[110].opNext = 111;
    this.opcodes[110].type = RNM;
    this.opcodes[110].ruleIndex = 42;

    this.opcodes[111] = [];
    this.opcodes[111].opNext = 112;
    this.opcodes[111].type = RNM;
    this.opcodes[111].ruleIndex = 43;

    this.opcodes[112] = [];
    this.opcodes[112].opNext = 113;
    this.opcodes[112].type = RNM;
    this.opcodes[112].ruleIndex = 47;

    this.opcodes[113] = [];
    this.opcodes[113].opNext = 114;
    this.opcodes[113].type = TLS;
    this.opcodes[113].length = 1;
    this.opcodes[113].stringIndex = 31;

    this.opcodes[114] = [];
    this.opcodes[114].opNext = 118;
    this.opcodes[114].type = ALT;

    this.opcodes[115] = [];
    this.opcodes[115].opNext = 116;
    this.opcodes[115].type = RNM;
    this.opcodes[115].ruleIndex = 23;

    this.opcodes[116] = [];
    this.opcodes[116].opNext = 117;
    this.opcodes[116].type = RNM;
    this.opcodes[116].ruleIndex = 28;

    this.opcodes[117] = [];
    this.opcodes[117].opNext = 118;
    this.opcodes[117].type = RNM;
    this.opcodes[117].ruleIndex = 30;

    this.opcodes[118] = [];
    this.opcodes[118].opNext = 124;
    this.opcodes[118].type = CAT;

    this.opcodes[119] = [];
    this.opcodes[119].opNext = 120;
    this.opcodes[119].type = TLS;
    this.opcodes[119].length = 1;
    this.opcodes[119].stringIndex = 32;

    this.opcodes[120] = [];
    this.opcodes[120].opNext = 123;
    this.opcodes[120].type = ALT;

    this.opcodes[121] = [];
    this.opcodes[121].opNext = 122;
    this.opcodes[121].type = RNM;
    this.opcodes[121].ruleIndex = 25;

    this.opcodes[122] = [];
    this.opcodes[122].opNext = 123;
    this.opcodes[122].type = RNM;
    this.opcodes[122].ruleIndex = 24;

    this.opcodes[123] = [];
    this.opcodes[123].opNext = 124;
    this.opcodes[123].type = TLS;
    this.opcodes[123].length = 1;
    this.opcodes[123].stringIndex = 33;

    this.opcodes[124] = [];
    this.opcodes[124].opNext = 134;
    this.opcodes[124].type = CAT;

    this.opcodes[125] = [];
    this.opcodes[125].opNext = 126;
    this.opcodes[125].type = TLS;
    this.opcodes[125].length = 1;
    this.opcodes[125].stringIndex = 34;

    this.opcodes[126] = [];
    this.opcodes[126].opNext = 128;
    this.opcodes[126].type = REP;
    this.opcodes[126].min = 1;
    this.opcodes[126].max = Infinity;

    this.opcodes[127] = [];
    this.opcodes[127].opNext = 128;
    this.opcodes[127].type = RNM;
    this.opcodes[127].ruleIndex = 57;

    this.opcodes[128] = [];
    this.opcodes[128].opNext = 129;
    this.opcodes[128].type = TLS;
    this.opcodes[128].length = 1;
    this.opcodes[128].stringIndex = 35;

    this.opcodes[129] = [];
    this.opcodes[129].opNext = 134;
    this.opcodes[129].type = REP;
    this.opcodes[129].min = 1;
    this.opcodes[129].max = Infinity;

    this.opcodes[130] = [];
    this.opcodes[130].opNext = 134;
    this.opcodes[130].type = ALT;

    this.opcodes[131] = [];
    this.opcodes[131].opNext = 132;
    this.opcodes[131].type = RNM;
    this.opcodes[131].ruleIndex = 48;

    this.opcodes[132] = [];
    this.opcodes[132].opNext = 133;
    this.opcodes[132].type = RNM;
    this.opcodes[132].ruleIndex = 47;

    this.opcodes[133] = [];
    this.opcodes[133].opNext = 134;
    this.opcodes[133].type = TLS;
    this.opcodes[133].length = 1;
    this.opcodes[133].stringIndex = 36;

    this.opcodes[134] = [];
    this.opcodes[134].opNext = 226;
    this.opcodes[134].type = ALT;

    this.opcodes[135] = [];
    this.opcodes[135].opNext = 141;
    this.opcodes[135].type = CAT;

    this.opcodes[136] = [];
    this.opcodes[136].opNext = 140;
    this.opcodes[136].type = REP;
    this.opcodes[136].min = 6;
    this.opcodes[136].max = 6;

    this.opcodes[137] = [];
    this.opcodes[137].opNext = 140;
    this.opcodes[137].type = CAT;

    this.opcodes[138] = [];
    this.opcodes[138].opNext = 139;
    this.opcodes[138].type = RNM;
    this.opcodes[138].ruleIndex = 27;

    this.opcodes[139] = [];
    this.opcodes[139].opNext = 140;
    this.opcodes[139].type = TLS;
    this.opcodes[139].length = 1;
    this.opcodes[139].stringIndex = 37;

    this.opcodes[140] = [];
    this.opcodes[140].opNext = 141;
    this.opcodes[140].type = RNM;
    this.opcodes[140].ruleIndex = 26;

    this.opcodes[141] = [];
    this.opcodes[141].opNext = 148;
    this.opcodes[141].type = CAT;

    this.opcodes[142] = [];
    this.opcodes[142].opNext = 143;
    this.opcodes[142].type = TLS;
    this.opcodes[142].length = 2;
    this.opcodes[142].stringIndex = 38;

    this.opcodes[143] = [];
    this.opcodes[143].opNext = 147;
    this.opcodes[143].type = REP;
    this.opcodes[143].min = 5;
    this.opcodes[143].max = 5;

    this.opcodes[144] = [];
    this.opcodes[144].opNext = 147;
    this.opcodes[144].type = CAT;

    this.opcodes[145] = [];
    this.opcodes[145].opNext = 146;
    this.opcodes[145].type = RNM;
    this.opcodes[145].ruleIndex = 27;

    this.opcodes[146] = [];
    this.opcodes[146].opNext = 147;
    this.opcodes[146].type = TLS;
    this.opcodes[146].length = 1;
    this.opcodes[146].stringIndex = 40;

    this.opcodes[147] = [];
    this.opcodes[147].opNext = 148;
    this.opcodes[147].type = RNM;
    this.opcodes[147].ruleIndex = 26;

    this.opcodes[148] = [];
    this.opcodes[148].opNext = 157;
    this.opcodes[148].type = CAT;

    this.opcodes[149] = [];
    this.opcodes[149].opNext = 151;
    this.opcodes[149].type = REP;
    this.opcodes[149].min = 0;
    this.opcodes[149].max = 1;

    this.opcodes[150] = [];
    this.opcodes[150].opNext = 151;
    this.opcodes[150].type = RNM;
    this.opcodes[150].ruleIndex = 27;

    this.opcodes[151] = [];
    this.opcodes[151].opNext = 152;
    this.opcodes[151].type = TLS;
    this.opcodes[151].length = 2;
    this.opcodes[151].stringIndex = 41;

    this.opcodes[152] = [];
    this.opcodes[152].opNext = 156;
    this.opcodes[152].type = REP;
    this.opcodes[152].min = 4;
    this.opcodes[152].max = 4;

    this.opcodes[153] = [];
    this.opcodes[153].opNext = 156;
    this.opcodes[153].type = CAT;

    this.opcodes[154] = [];
    this.opcodes[154].opNext = 155;
    this.opcodes[154].type = RNM;
    this.opcodes[154].ruleIndex = 27;

    this.opcodes[155] = [];
    this.opcodes[155].opNext = 156;
    this.opcodes[155].type = TLS;
    this.opcodes[155].length = 1;
    this.opcodes[155].stringIndex = 43;

    this.opcodes[156] = [];
    this.opcodes[156].opNext = 157;
    this.opcodes[156].type = RNM;
    this.opcodes[156].ruleIndex = 26;

    this.opcodes[157] = [];
    this.opcodes[157].opNext = 171;
    this.opcodes[157].type = CAT;

    this.opcodes[158] = [];
    this.opcodes[158].opNext = 165;
    this.opcodes[158].type = REP;
    this.opcodes[158].min = 0;
    this.opcodes[158].max = 1;

    this.opcodes[159] = [];
    this.opcodes[159].opNext = 165;
    this.opcodes[159].type = CAT;

    this.opcodes[160] = [];
    this.opcodes[160].opNext = 164;
    this.opcodes[160].type = REP;
    this.opcodes[160].min = 0;
    this.opcodes[160].max = 1;

    this.opcodes[161] = [];
    this.opcodes[161].opNext = 164;
    this.opcodes[161].type = CAT;

    this.opcodes[162] = [];
    this.opcodes[162].opNext = 163;
    this.opcodes[162].type = RNM;
    this.opcodes[162].ruleIndex = 27;

    this.opcodes[163] = [];
    this.opcodes[163].opNext = 164;
    this.opcodes[163].type = TLS;
    this.opcodes[163].length = 1;
    this.opcodes[163].stringIndex = 44;

    this.opcodes[164] = [];
    this.opcodes[164].opNext = 165;
    this.opcodes[164].type = RNM;
    this.opcodes[164].ruleIndex = 27;

    this.opcodes[165] = [];
    this.opcodes[165].opNext = 166;
    this.opcodes[165].type = TLS;
    this.opcodes[165].length = 2;
    this.opcodes[165].stringIndex = 45;

    this.opcodes[166] = [];
    this.opcodes[166].opNext = 170;
    this.opcodes[166].type = REP;
    this.opcodes[166].min = 3;
    this.opcodes[166].max = 3;

    this.opcodes[167] = [];
    this.opcodes[167].opNext = 170;
    this.opcodes[167].type = CAT;

    this.opcodes[168] = [];
    this.opcodes[168].opNext = 169;
    this.opcodes[168].type = RNM;
    this.opcodes[168].ruleIndex = 27;

    this.opcodes[169] = [];
    this.opcodes[169].opNext = 170;
    this.opcodes[169].type = TLS;
    this.opcodes[169].length = 1;
    this.opcodes[169].stringIndex = 47;

    this.opcodes[170] = [];
    this.opcodes[170].opNext = 171;
    this.opcodes[170].type = RNM;
    this.opcodes[170].ruleIndex = 26;

    this.opcodes[171] = [];
    this.opcodes[171].opNext = 185;
    this.opcodes[171].type = CAT;

    this.opcodes[172] = [];
    this.opcodes[172].opNext = 179;
    this.opcodes[172].type = REP;
    this.opcodes[172].min = 0;
    this.opcodes[172].max = 1;

    this.opcodes[173] = [];
    this.opcodes[173].opNext = 179;
    this.opcodes[173].type = CAT;

    this.opcodes[174] = [];
    this.opcodes[174].opNext = 178;
    this.opcodes[174].type = REP;
    this.opcodes[174].min = 0;
    this.opcodes[174].max = 2;

    this.opcodes[175] = [];
    this.opcodes[175].opNext = 178;
    this.opcodes[175].type = CAT;

    this.opcodes[176] = [];
    this.opcodes[176].opNext = 177;
    this.opcodes[176].type = RNM;
    this.opcodes[176].ruleIndex = 27;

    this.opcodes[177] = [];
    this.opcodes[177].opNext = 178;
    this.opcodes[177].type = TLS;
    this.opcodes[177].length = 1;
    this.opcodes[177].stringIndex = 48;

    this.opcodes[178] = [];
    this.opcodes[178].opNext = 179;
    this.opcodes[178].type = RNM;
    this.opcodes[178].ruleIndex = 27;

    this.opcodes[179] = [];
    this.opcodes[179].opNext = 180;
    this.opcodes[179].type = TLS;
    this.opcodes[179].length = 2;
    this.opcodes[179].stringIndex = 49;

    this.opcodes[180] = [];
    this.opcodes[180].opNext = 184;
    this.opcodes[180].type = REP;
    this.opcodes[180].min = 2;
    this.opcodes[180].max = 2;

    this.opcodes[181] = [];
    this.opcodes[181].opNext = 184;
    this.opcodes[181].type = CAT;

    this.opcodes[182] = [];
    this.opcodes[182].opNext = 183;
    this.opcodes[182].type = RNM;
    this.opcodes[182].ruleIndex = 27;

    this.opcodes[183] = [];
    this.opcodes[183].opNext = 184;
    this.opcodes[183].type = TLS;
    this.opcodes[183].length = 1;
    this.opcodes[183].stringIndex = 51;

    this.opcodes[184] = [];
    this.opcodes[184].opNext = 185;
    this.opcodes[184].type = RNM;
    this.opcodes[184].ruleIndex = 26;

    this.opcodes[185] = [];
    this.opcodes[185].opNext = 197;
    this.opcodes[185].type = CAT;

    this.opcodes[186] = [];
    this.opcodes[186].opNext = 193;
    this.opcodes[186].type = REP;
    this.opcodes[186].min = 0;
    this.opcodes[186].max = 1;

    this.opcodes[187] = [];
    this.opcodes[187].opNext = 193;
    this.opcodes[187].type = CAT;

    this.opcodes[188] = [];
    this.opcodes[188].opNext = 192;
    this.opcodes[188].type = REP;
    this.opcodes[188].min = 0;
    this.opcodes[188].max = 3;

    this.opcodes[189] = [];
    this.opcodes[189].opNext = 192;
    this.opcodes[189].type = CAT;

    this.opcodes[190] = [];
    this.opcodes[190].opNext = 191;
    this.opcodes[190].type = RNM;
    this.opcodes[190].ruleIndex = 27;

    this.opcodes[191] = [];
    this.opcodes[191].opNext = 192;
    this.opcodes[191].type = TLS;
    this.opcodes[191].length = 1;
    this.opcodes[191].stringIndex = 52;

    this.opcodes[192] = [];
    this.opcodes[192].opNext = 193;
    this.opcodes[192].type = RNM;
    this.opcodes[192].ruleIndex = 27;

    this.opcodes[193] = [];
    this.opcodes[193].opNext = 194;
    this.opcodes[193].type = TLS;
    this.opcodes[193].length = 2;
    this.opcodes[193].stringIndex = 53;

    this.opcodes[194] = [];
    this.opcodes[194].opNext = 195;
    this.opcodes[194].type = RNM;
    this.opcodes[194].ruleIndex = 27;

    this.opcodes[195] = [];
    this.opcodes[195].opNext = 196;
    this.opcodes[195].type = TLS;
    this.opcodes[195].length = 1;
    this.opcodes[195].stringIndex = 55;

    this.opcodes[196] = [];
    this.opcodes[196].opNext = 197;
    this.opcodes[196].type = RNM;
    this.opcodes[196].ruleIndex = 26;

    this.opcodes[197] = [];
    this.opcodes[197].opNext = 207;
    this.opcodes[197].type = CAT;

    this.opcodes[198] = [];
    this.opcodes[198].opNext = 205;
    this.opcodes[198].type = REP;
    this.opcodes[198].min = 0;
    this.opcodes[198].max = 1;

    this.opcodes[199] = [];
    this.opcodes[199].opNext = 205;
    this.opcodes[199].type = CAT;

    this.opcodes[200] = [];
    this.opcodes[200].opNext = 204;
    this.opcodes[200].type = REP;
    this.opcodes[200].min = 0;
    this.opcodes[200].max = 4;

    this.opcodes[201] = [];
    this.opcodes[201].opNext = 204;
    this.opcodes[201].type = CAT;

    this.opcodes[202] = [];
    this.opcodes[202].opNext = 203;
    this.opcodes[202].type = RNM;
    this.opcodes[202].ruleIndex = 27;

    this.opcodes[203] = [];
    this.opcodes[203].opNext = 204;
    this.opcodes[203].type = TLS;
    this.opcodes[203].length = 1;
    this.opcodes[203].stringIndex = 56;

    this.opcodes[204] = [];
    this.opcodes[204].opNext = 205;
    this.opcodes[204].type = RNM;
    this.opcodes[204].ruleIndex = 27;

    this.opcodes[205] = [];
    this.opcodes[205].opNext = 206;
    this.opcodes[205].type = TLS;
    this.opcodes[205].length = 2;
    this.opcodes[205].stringIndex = 57;

    this.opcodes[206] = [];
    this.opcodes[206].opNext = 207;
    this.opcodes[206].type = RNM;
    this.opcodes[206].ruleIndex = 26;

    this.opcodes[207] = [];
    this.opcodes[207].opNext = 217;
    this.opcodes[207].type = CAT;

    this.opcodes[208] = [];
    this.opcodes[208].opNext = 215;
    this.opcodes[208].type = REP;
    this.opcodes[208].min = 0;
    this.opcodes[208].max = 1;

    this.opcodes[209] = [];
    this.opcodes[209].opNext = 215;
    this.opcodes[209].type = CAT;

    this.opcodes[210] = [];
    this.opcodes[210].opNext = 214;
    this.opcodes[210].type = REP;
    this.opcodes[210].min = 0;
    this.opcodes[210].max = 5;

    this.opcodes[211] = [];
    this.opcodes[211].opNext = 214;
    this.opcodes[211].type = CAT;

    this.opcodes[212] = [];
    this.opcodes[212].opNext = 213;
    this.opcodes[212].type = RNM;
    this.opcodes[212].ruleIndex = 27;

    this.opcodes[213] = [];
    this.opcodes[213].opNext = 214;
    this.opcodes[213].type = TLS;
    this.opcodes[213].length = 1;
    this.opcodes[213].stringIndex = 59;

    this.opcodes[214] = [];
    this.opcodes[214].opNext = 215;
    this.opcodes[214].type = RNM;
    this.opcodes[214].ruleIndex = 27;

    this.opcodes[215] = [];
    this.opcodes[215].opNext = 216;
    this.opcodes[215].type = TLS;
    this.opcodes[215].length = 2;
    this.opcodes[215].stringIndex = 60;

    this.opcodes[216] = [];
    this.opcodes[216].opNext = 217;
    this.opcodes[216].type = RNM;
    this.opcodes[216].ruleIndex = 27;

    this.opcodes[217] = [];
    this.opcodes[217].opNext = 226;
    this.opcodes[217].type = CAT;

    this.opcodes[218] = [];
    this.opcodes[218].opNext = 225;
    this.opcodes[218].type = REP;
    this.opcodes[218].min = 0;
    this.opcodes[218].max = 1;

    this.opcodes[219] = [];
    this.opcodes[219].opNext = 225;
    this.opcodes[219].type = CAT;

    this.opcodes[220] = [];
    this.opcodes[220].opNext = 224;
    this.opcodes[220].type = REP;
    this.opcodes[220].min = 0;
    this.opcodes[220].max = 6;

    this.opcodes[221] = [];
    this.opcodes[221].opNext = 224;
    this.opcodes[221].type = CAT;

    this.opcodes[222] = [];
    this.opcodes[222].opNext = 223;
    this.opcodes[222].type = RNM;
    this.opcodes[222].ruleIndex = 27;

    this.opcodes[223] = [];
    this.opcodes[223].opNext = 224;
    this.opcodes[223].type = TLS;
    this.opcodes[223].length = 1;
    this.opcodes[223].stringIndex = 62;

    this.opcodes[224] = [];
    this.opcodes[224].opNext = 225;
    this.opcodes[224].type = RNM;
    this.opcodes[224].ruleIndex = 27;

    this.opcodes[225] = [];
    this.opcodes[225].opNext = 226;
    this.opcodes[225].type = TLS;
    this.opcodes[225].length = 2;
    this.opcodes[225].stringIndex = 63;

    this.opcodes[226] = [];
    this.opcodes[226].opNext = 232;
    this.opcodes[226].type = ALT;

    this.opcodes[227] = [];
    this.opcodes[227].opNext = 231;
    this.opcodes[227].type = CAT;

    this.opcodes[228] = [];
    this.opcodes[228].opNext = 229;
    this.opcodes[228].type = RNM;
    this.opcodes[228].ruleIndex = 27;

    this.opcodes[229] = [];
    this.opcodes[229].opNext = 230;
    this.opcodes[229].type = TLS;
    this.opcodes[229].length = 1;
    this.opcodes[229].stringIndex = 65;

    this.opcodes[230] = [];
    this.opcodes[230].opNext = 231;
    this.opcodes[230].type = RNM;
    this.opcodes[230].ruleIndex = 27;

    this.opcodes[231] = [];
    this.opcodes[231].opNext = 232;
    this.opcodes[231].type = RNM;
    this.opcodes[231].ruleIndex = 28;

    this.opcodes[232] = [];
    this.opcodes[232].opNext = 234;
    this.opcodes[232].type = REP;
    this.opcodes[232].min = 1;
    this.opcodes[232].max = 4;

    this.opcodes[233] = [];
    this.opcodes[233].opNext = 234;
    this.opcodes[233].type = RNM;
    this.opcodes[233].ruleIndex = 57;

    this.opcodes[234] = [];
    this.opcodes[234].opNext = 242;
    this.opcodes[234].type = CAT;

    this.opcodes[235] = [];
    this.opcodes[235].opNext = 236;
    this.opcodes[235].type = RNM;
    this.opcodes[235].ruleIndex = 29;

    this.opcodes[236] = [];
    this.opcodes[236].opNext = 237;
    this.opcodes[236].type = TLS;
    this.opcodes[236].length = 1;
    this.opcodes[236].stringIndex = 66;

    this.opcodes[237] = [];
    this.opcodes[237].opNext = 238;
    this.opcodes[237].type = RNM;
    this.opcodes[237].ruleIndex = 29;

    this.opcodes[238] = [];
    this.opcodes[238].opNext = 239;
    this.opcodes[238].type = TLS;
    this.opcodes[238].length = 1;
    this.opcodes[238].stringIndex = 67;

    this.opcodes[239] = [];
    this.opcodes[239].opNext = 240;
    this.opcodes[239].type = RNM;
    this.opcodes[239].ruleIndex = 29;

    this.opcodes[240] = [];
    this.opcodes[240].opNext = 241;
    this.opcodes[240].type = TLS;
    this.opcodes[240].length = 1;
    this.opcodes[240].stringIndex = 68;

    this.opcodes[241] = [];
    this.opcodes[241].opNext = 242;
    this.opcodes[241].type = RNM;
    this.opcodes[241].ruleIndex = 29;

    this.opcodes[242] = [];
    this.opcodes[242].opNext = 258;
    this.opcodes[242].type = ALT;

    this.opcodes[243] = [];
    this.opcodes[243].opNext = 244;
    this.opcodes[243].type = RNM;
    this.opcodes[243].ruleIndex = 55;

    this.opcodes[244] = [];
    this.opcodes[244].opNext = 247;
    this.opcodes[244].type = CAT;

    this.opcodes[245] = [];
    this.opcodes[245].opNext = 246;
    this.opcodes[245].type = TRG;
    this.opcodes[245].min = 49;
    this.opcodes[245].max = 57;

    this.opcodes[246] = [];
    this.opcodes[246].opNext = 247;
    this.opcodes[246].type = RNM;
    this.opcodes[246].ruleIndex = 55;

    this.opcodes[247] = [];
    this.opcodes[247].opNext = 251;
    this.opcodes[247].type = CAT;

    this.opcodes[248] = [];
    this.opcodes[248].opNext = 249;
    this.opcodes[248].type = TLS;
    this.opcodes[248].length = 1;
    this.opcodes[248].stringIndex = 69;

    this.opcodes[249] = [];
    this.opcodes[249].opNext = 251;
    this.opcodes[249].type = REP;
    this.opcodes[249].min = 2;
    this.opcodes[249].max = 2;

    this.opcodes[250] = [];
    this.opcodes[250].opNext = 251;
    this.opcodes[250].type = RNM;
    this.opcodes[250].ruleIndex = 55;

    this.opcodes[251] = [];
    this.opcodes[251].opNext = 255;
    this.opcodes[251].type = CAT;

    this.opcodes[252] = [];
    this.opcodes[252].opNext = 253;
    this.opcodes[252].type = TLS;
    this.opcodes[252].length = 1;
    this.opcodes[252].stringIndex = 70;

    this.opcodes[253] = [];
    this.opcodes[253].opNext = 254;
    this.opcodes[253].type = TRG;
    this.opcodes[253].min = 48;
    this.opcodes[253].max = 52;

    this.opcodes[254] = [];
    this.opcodes[254].opNext = 255;
    this.opcodes[254].type = RNM;
    this.opcodes[254].ruleIndex = 55;

    this.opcodes[255] = [];
    this.opcodes[255].opNext = 258;
    this.opcodes[255].type = CAT;

    this.opcodes[256] = [];
    this.opcodes[256].opNext = 257;
    this.opcodes[256].type = TLS;
    this.opcodes[256].length = 2;
    this.opcodes[256].stringIndex = 71;

    this.opcodes[257] = [];
    this.opcodes[257].opNext = 258;
    this.opcodes[257].type = TRG;
    this.opcodes[257].min = 48;
    this.opcodes[257].max = 53;

    this.opcodes[258] = [];
    this.opcodes[258].opNext = 263;
    this.opcodes[258].type = REP;
    this.opcodes[258].min = 0;
    this.opcodes[258].max = Infinity;

    this.opcodes[259] = [];
    this.opcodes[259].opNext = 263;
    this.opcodes[259].type = ALT;

    this.opcodes[260] = [];
    this.opcodes[260].opNext = 261;
    this.opcodes[260].type = RNM;
    this.opcodes[260].ruleIndex = 42;

    this.opcodes[261] = [];
    this.opcodes[261].opNext = 262;
    this.opcodes[261].type = RNM;
    this.opcodes[261].ruleIndex = 43;

    this.opcodes[262] = [];
    this.opcodes[262].opNext = 263;
    this.opcodes[262].type = RNM;
    this.opcodes[262].ruleIndex = 47;

    this.opcodes[263] = [];
    this.opcodes[263].opNext = 265;
    this.opcodes[263].type = REP;
    this.opcodes[263].min = 0;
    this.opcodes[263].max = Infinity;

    this.opcodes[264] = [];
    this.opcodes[264].opNext = 265;
    this.opcodes[264].type = RNM;
    this.opcodes[264].ruleIndex = 55;

    this.opcodes[265] = [];
    this.opcodes[265].opNext = 269;
    this.opcodes[265].type = REP;
    this.opcodes[265].min = 0;
    this.opcodes[265].max = Infinity;

    this.opcodes[266] = [];
    this.opcodes[266].opNext = 269;
    this.opcodes[266].type = CAT;

    this.opcodes[267] = [];
    this.opcodes[267].opNext = 268;
    this.opcodes[267].type = TLS;
    this.opcodes[267].length = 1;
    this.opcodes[267].stringIndex = 73;

    this.opcodes[268] = [];
    this.opcodes[268].opNext = 269;
    this.opcodes[268].type = RNM;
    this.opcodes[268].ruleIndex = 36;

    this.opcodes[269] = [];
    this.opcodes[269].opNext = 278;
    this.opcodes[269].type = CAT;

    this.opcodes[270] = [];
    this.opcodes[270].opNext = 271;
    this.opcodes[270].type = TLS;
    this.opcodes[270].length = 1;
    this.opcodes[270].stringIndex = 74;

    this.opcodes[271] = [];
    this.opcodes[271].opNext = 278;
    this.opcodes[271].type = REP;
    this.opcodes[271].min = 0;
    this.opcodes[271].max = 1;

    this.opcodes[272] = [];
    this.opcodes[272].opNext = 278;
    this.opcodes[272].type = CAT;

    this.opcodes[273] = [];
    this.opcodes[273].opNext = 274;
    this.opcodes[273].type = RNM;
    this.opcodes[273].ruleIndex = 37;

    this.opcodes[274] = [];
    this.opcodes[274].opNext = 278;
    this.opcodes[274].type = REP;
    this.opcodes[274].min = 0;
    this.opcodes[274].max = Infinity;

    this.opcodes[275] = [];
    this.opcodes[275].opNext = 278;
    this.opcodes[275].type = CAT;

    this.opcodes[276] = [];
    this.opcodes[276].opNext = 277;
    this.opcodes[276].type = TLS;
    this.opcodes[276].length = 1;
    this.opcodes[276].stringIndex = 75;

    this.opcodes[277] = [];
    this.opcodes[277].opNext = 278;
    this.opcodes[277].type = RNM;
    this.opcodes[277].ruleIndex = 36;

    this.opcodes[278] = [];
    this.opcodes[278].opNext = 284;
    this.opcodes[278].type = CAT;

    this.opcodes[279] = [];
    this.opcodes[279].opNext = 280;
    this.opcodes[279].type = RNM;
    this.opcodes[279].ruleIndex = 37;

    this.opcodes[280] = [];
    this.opcodes[280].opNext = 284;
    this.opcodes[280].type = REP;
    this.opcodes[280].min = 0;
    this.opcodes[280].max = Infinity;

    this.opcodes[281] = [];
    this.opcodes[281].opNext = 284;
    this.opcodes[281].type = CAT;

    this.opcodes[282] = [];
    this.opcodes[282].opNext = 283;
    this.opcodes[282].type = TLS;
    this.opcodes[282].length = 1;
    this.opcodes[282].stringIndex = 76;

    this.opcodes[283] = [];
    this.opcodes[283].opNext = 284;
    this.opcodes[283].type = RNM;
    this.opcodes[283].ruleIndex = 36;

    this.opcodes[284] = [];
    this.opcodes[284].opNext = 285;
    this.opcodes[284].type = TLS;
    this.opcodes[284].length = 0;
    this.opcodes[284].stringIndex = 77;

    this.opcodes[285] = [];
    this.opcodes[285].opNext = 287;
    this.opcodes[285].type = REP;
    this.opcodes[285].min = 0;
    this.opcodes[285].max = Infinity;

    this.opcodes[286] = [];
    this.opcodes[286].opNext = 287;
    this.opcodes[286].type = RNM;
    this.opcodes[286].ruleIndex = 41;

    this.opcodes[287] = [];
    this.opcodes[287].opNext = 289;
    this.opcodes[287].type = REP;
    this.opcodes[287].min = 1;
    this.opcodes[287].max = Infinity;

    this.opcodes[288] = [];
    this.opcodes[288].opNext = 289;
    this.opcodes[288].type = RNM;
    this.opcodes[288].ruleIndex = 41;

    this.opcodes[289] = [];
    this.opcodes[289].opNext = 295;
    this.opcodes[289].type = REP;
    this.opcodes[289].min = 0;
    this.opcodes[289].max = Infinity;

    this.opcodes[290] = [];
    this.opcodes[290].opNext = 295;
    this.opcodes[290].type = ALT;

    this.opcodes[291] = [];
    this.opcodes[291].opNext = 292;
    this.opcodes[291].type = RNM;
    this.opcodes[291].ruleIndex = 41;

    this.opcodes[292] = [];
    this.opcodes[292].opNext = 293;
    this.opcodes[292].type = RNM;
    this.opcodes[292].ruleIndex = 39;

    this.opcodes[293] = [];
    this.opcodes[293].opNext = 294;
    this.opcodes[293].type = TLS;
    this.opcodes[293].length = 1;
    this.opcodes[293].stringIndex = 77;

    this.opcodes[294] = [];
    this.opcodes[294].opNext = 295;
    this.opcodes[294].type = TLS;
    this.opcodes[294].length = 1;
    this.opcodes[294].stringIndex = 78;

    this.opcodes[295] = [];
    this.opcodes[295].opNext = 296;
    this.opcodes[295].type = TRG;
    this.opcodes[295].min = 57344;
    this.opcodes[295].max = 63743;

    this.opcodes[296] = [];
    this.opcodes[296].opNext = 301;
    this.opcodes[296].type = REP;
    this.opcodes[296].min = 0;
    this.opcodes[296].max = Infinity;

    this.opcodes[297] = [];
    this.opcodes[297].opNext = 301;
    this.opcodes[297].type = ALT;

    this.opcodes[298] = [];
    this.opcodes[298].opNext = 299;
    this.opcodes[298].type = RNM;
    this.opcodes[298].ruleIndex = 41;

    this.opcodes[299] = [];
    this.opcodes[299].opNext = 300;
    this.opcodes[299].type = TLS;
    this.opcodes[299].length = 1;
    this.opcodes[299].stringIndex = 79;

    this.opcodes[300] = [];
    this.opcodes[300].opNext = 301;
    this.opcodes[300].type = TLS;
    this.opcodes[300].length = 1;
    this.opcodes[300].stringIndex = 80;

    this.opcodes[301] = [];
    this.opcodes[301].opNext = 307;
    this.opcodes[301].type = ALT;

    this.opcodes[302] = [];
    this.opcodes[302].opNext = 303;
    this.opcodes[302].type = RNM;
    this.opcodes[302].ruleIndex = 42;

    this.opcodes[303] = [];
    this.opcodes[303].opNext = 304;
    this.opcodes[303].type = RNM;
    this.opcodes[303].ruleIndex = 43;

    this.opcodes[304] = [];
    this.opcodes[304].opNext = 305;
    this.opcodes[304].type = RNM;
    this.opcodes[304].ruleIndex = 47;

    this.opcodes[305] = [];
    this.opcodes[305].opNext = 306;
    this.opcodes[305].type = TLS;
    this.opcodes[305].length = 1;
    this.opcodes[305].stringIndex = 81;

    this.opcodes[306] = [];
    this.opcodes[306].opNext = 307;
    this.opcodes[306].type = TLS;
    this.opcodes[306].length = 1;
    this.opcodes[306].stringIndex = 82;

    this.opcodes[307] = [];
    this.opcodes[307].opNext = 315;
    this.opcodes[307].type = ALT;

    this.opcodes[308] = [];
    this.opcodes[308].opNext = 309;
    this.opcodes[308].type = RNM;
    this.opcodes[308].ruleIndex = 49;

    this.opcodes[309] = [];
    this.opcodes[309].opNext = 310;
    this.opcodes[309].type = RNM;
    this.opcodes[309].ruleIndex = 55;

    this.opcodes[310] = [];
    this.opcodes[310].opNext = 311;
    this.opcodes[310].type = TLS;
    this.opcodes[310].length = 1;
    this.opcodes[310].stringIndex = 83;

    this.opcodes[311] = [];
    this.opcodes[311].opNext = 312;
    this.opcodes[311].type = TLS;
    this.opcodes[311].length = 1;
    this.opcodes[311].stringIndex = 84;

    this.opcodes[312] = [];
    this.opcodes[312].opNext = 313;
    this.opcodes[312].type = TLS;
    this.opcodes[312].length = 1;
    this.opcodes[312].stringIndex = 85;

    this.opcodes[313] = [];
    this.opcodes[313].opNext = 314;
    this.opcodes[313].type = TLS;
    this.opcodes[313].length = 1;
    this.opcodes[313].stringIndex = 86;

    this.opcodes[314] = [];
    this.opcodes[314].opNext = 315;
    this.opcodes[314].type = RNM;
    this.opcodes[314].ruleIndex = 44;

    this.opcodes[315] = [];
    this.opcodes[315].opNext = 319;
    this.opcodes[315].type = CAT;

    this.opcodes[316] = [];
    this.opcodes[316].opNext = 317;
    this.opcodes[316].type = TLS;
    this.opcodes[316].length = 1;
    this.opcodes[316].stringIndex = 87;

    this.opcodes[317] = [];
    this.opcodes[317].opNext = 318;
    this.opcodes[317].type = RNM;
    this.opcodes[317].ruleIndex = 57;

    this.opcodes[318] = [];
    this.opcodes[318].opNext = 319;
    this.opcodes[318].type = RNM;
    this.opcodes[318].ruleIndex = 57;

    this.opcodes[319] = [];
    this.opcodes[319].opNext = 323;
    this.opcodes[319].type = ALT;

    this.opcodes[320] = [];
    this.opcodes[320].opNext = 321;
    this.opcodes[320].type = TRG;
    this.opcodes[320].min = 160;
    this.opcodes[320].max = 55295;

    this.opcodes[321] = [];
    this.opcodes[321].opNext = 322;
    this.opcodes[321].type = TRG;
    this.opcodes[321].min = 63744;
    this.opcodes[321].max = 64975;

    this.opcodes[322] = [];
    this.opcodes[322].opNext = 323;
    this.opcodes[322].type = TRG;
    this.opcodes[322].min = 65008;
    this.opcodes[322].max = 65519;

    this.opcodes[323] = [];
    this.opcodes[323].opNext = 326;
    this.opcodes[323].type = ALT;

    this.opcodes[324] = [];
    this.opcodes[324].opNext = 325;
    this.opcodes[324].type = RNM;
    this.opcodes[324].ruleIndex = 46;

    this.opcodes[325] = [];
    this.opcodes[325].opNext = 326;
    this.opcodes[325].type = RNM;
    this.opcodes[325].ruleIndex = 47;

    this.opcodes[326] = [];
    this.opcodes[326].opNext = 334;
    this.opcodes[326].type = ALT;

    this.opcodes[327] = [];
    this.opcodes[327].opNext = 328;
    this.opcodes[327].type = TLS;
    this.opcodes[327].length = 1;
    this.opcodes[327].stringIndex = 88;

    this.opcodes[328] = [];
    this.opcodes[328].opNext = 329;
    this.opcodes[328].type = TLS;
    this.opcodes[328].length = 1;
    this.opcodes[328].stringIndex = 89;

    this.opcodes[329] = [];
    this.opcodes[329].opNext = 330;
    this.opcodes[329].type = TLS;
    this.opcodes[329].length = 1;
    this.opcodes[329].stringIndex = 90;

    this.opcodes[330] = [];
    this.opcodes[330].opNext = 331;
    this.opcodes[330].type = TLS;
    this.opcodes[330].length = 1;
    this.opcodes[330].stringIndex = 91;

    this.opcodes[331] = [];
    this.opcodes[331].opNext = 332;
    this.opcodes[331].type = TLS;
    this.opcodes[331].length = 1;
    this.opcodes[331].stringIndex = 92;

    this.opcodes[332] = [];
    this.opcodes[332].opNext = 333;
    this.opcodes[332].type = TLS;
    this.opcodes[332].length = 1;
    this.opcodes[332].stringIndex = 93;

    this.opcodes[333] = [];
    this.opcodes[333].opNext = 334;
    this.opcodes[333].type = TLS;
    this.opcodes[333].length = 1;
    this.opcodes[333].stringIndex = 94;

    this.opcodes[334] = [];
    this.opcodes[334].opNext = 344;
    this.opcodes[334].type = ALT;

    this.opcodes[335] = [];
    this.opcodes[335].opNext = 336;
    this.opcodes[335].type = TLS;
    this.opcodes[335].length = 1;
    this.opcodes[335].stringIndex = 95;

    this.opcodes[336] = [];
    this.opcodes[336].opNext = 337;
    this.opcodes[336].type = TLS;
    this.opcodes[336].length = 1;
    this.opcodes[336].stringIndex = 96;

    this.opcodes[337] = [];
    this.opcodes[337].opNext = 338;
    this.opcodes[337].type = TLS;
    this.opcodes[337].length = 1;
    this.opcodes[337].stringIndex = 97;

    this.opcodes[338] = [];
    this.opcodes[338].opNext = 339;
    this.opcodes[338].type = TLS;
    this.opcodes[338].length = 1;
    this.opcodes[338].stringIndex = 98;

    this.opcodes[339] = [];
    this.opcodes[339].opNext = 340;
    this.opcodes[339].type = TLS;
    this.opcodes[339].length = 1;
    this.opcodes[339].stringIndex = 99;

    this.opcodes[340] = [];
    this.opcodes[340].opNext = 341;
    this.opcodes[340].type = TLS;
    this.opcodes[340].length = 1;
    this.opcodes[340].stringIndex = 100;

    this.opcodes[341] = [];
    this.opcodes[341].opNext = 342;
    this.opcodes[341].type = TLS;
    this.opcodes[341].length = 1;
    this.opcodes[341].stringIndex = 101;

    this.opcodes[342] = [];
    this.opcodes[342].opNext = 343;
    this.opcodes[342].type = TLS;
    this.opcodes[342].length = 1;
    this.opcodes[342].stringIndex = 102;

    this.opcodes[343] = [];
    this.opcodes[343].opNext = 344;
    this.opcodes[343].type = TLS;
    this.opcodes[343].length = 1;
    this.opcodes[343].stringIndex = 103;

    this.opcodes[344] = [];
    this.opcodes[344].opNext = 351;
    this.opcodes[344].type = ALT;

    this.opcodes[345] = [];
    this.opcodes[345].opNext = 346;
    this.opcodes[345].type = RNM;
    this.opcodes[345].ruleIndex = 49;

    this.opcodes[346] = [];
    this.opcodes[346].opNext = 347;
    this.opcodes[346].type = RNM;
    this.opcodes[346].ruleIndex = 55;

    this.opcodes[347] = [];
    this.opcodes[347].opNext = 348;
    this.opcodes[347].type = TLS;
    this.opcodes[347].length = 1;
    this.opcodes[347].stringIndex = 104;

    this.opcodes[348] = [];
    this.opcodes[348].opNext = 349;
    this.opcodes[348].type = TLS;
    this.opcodes[348].length = 1;
    this.opcodes[348].stringIndex = 105;

    this.opcodes[349] = [];
    this.opcodes[349].opNext = 350;
    this.opcodes[349].type = TLS;
    this.opcodes[349].length = 1;
    this.opcodes[349].stringIndex = 106;

    this.opcodes[350] = [];
    this.opcodes[350].opNext = 351;
    this.opcodes[350].type = TLS;
    this.opcodes[350].length = 1;
    this.opcodes[350].stringIndex = 107;

    this.opcodes[351] = [];
    this.opcodes[351].opNext = 354;
    this.opcodes[351].type = ALT;

    this.opcodes[352] = [];
    this.opcodes[352].opNext = 353;
    this.opcodes[352].type = TRG;
    this.opcodes[352].min = 65;
    this.opcodes[352].max = 90;

    this.opcodes[353] = [];
    this.opcodes[353].opNext = 354;
    this.opcodes[353].type = TRG;
    this.opcodes[353].min = 97;
    this.opcodes[353].max = 122;

    this.opcodes[354] = [];
    this.opcodes[354].opNext = 357;
    this.opcodes[354].type = ALT;

    this.opcodes[355] = [];
    this.opcodes[355].opNext = 356;
    this.opcodes[355].type = TLS;
    this.opcodes[355].length = 1;
    this.opcodes[355].stringIndex = 108;

    this.opcodes[356] = [];
    this.opcodes[356].opNext = 357;
    this.opcodes[356].type = TLS;
    this.opcodes[356].length = 1;
    this.opcodes[356].stringIndex = 109;

    this.opcodes[357] = [];
    this.opcodes[357].opNext = 358;
    this.opcodes[357].type = TRG;
    this.opcodes[357].min = 1;
    this.opcodes[357].max = 127;

    this.opcodes[358] = [];
    this.opcodes[358].opNext = 359;
    this.opcodes[358].type = TRG;
    this.opcodes[358].min = 13;
    this.opcodes[358].max = 13;

    this.opcodes[359] = [];
    this.opcodes[359].opNext = 362;
    this.opcodes[359].type = CAT;

    this.opcodes[360] = [];
    this.opcodes[360].opNext = 361;
    this.opcodes[360].type = RNM;
    this.opcodes[360].ruleIndex = 52;

    this.opcodes[361] = [];
    this.opcodes[361].opNext = 362;
    this.opcodes[361].type = RNM;
    this.opcodes[361].ruleIndex = 59;

    this.opcodes[362] = [];
    this.opcodes[362].opNext = 365;
    this.opcodes[362].type = ALT;

    this.opcodes[363] = [];
    this.opcodes[363].opNext = 364;
    this.opcodes[363].type = TRG;
    this.opcodes[363].min = 0;
    this.opcodes[363].max = 31;

    this.opcodes[364] = [];
    this.opcodes[364].opNext = 365;
    this.opcodes[364].type = TRG;
    this.opcodes[364].min = 127;
    this.opcodes[364].max = 127;

    this.opcodes[365] = [];
    this.opcodes[365].opNext = 366;
    this.opcodes[365].type = TRG;
    this.opcodes[365].min = 48;
    this.opcodes[365].max = 57;

    this.opcodes[366] = [];
    this.opcodes[366].opNext = 367;
    this.opcodes[366].type = TRG;
    this.opcodes[366].min = 34;
    this.opcodes[366].max = 34;

    this.opcodes[367] = [];
    this.opcodes[367].opNext = 375;
    this.opcodes[367].type = ALT;

    this.opcodes[368] = [];
    this.opcodes[368].opNext = 369;
    this.opcodes[368].type = RNM;
    this.opcodes[368].ruleIndex = 55;

    this.opcodes[369] = [];
    this.opcodes[369].opNext = 370;
    this.opcodes[369].type = TLS;
    this.opcodes[369].length = 1;
    this.opcodes[369].stringIndex = 110;

    this.opcodes[370] = [];
    this.opcodes[370].opNext = 371;
    this.opcodes[370].type = TLS;
    this.opcodes[370].length = 1;
    this.opcodes[370].stringIndex = 111;

    this.opcodes[371] = [];
    this.opcodes[371].opNext = 372;
    this.opcodes[371].type = TLS;
    this.opcodes[371].length = 1;
    this.opcodes[371].stringIndex = 112;

    this.opcodes[372] = [];
    this.opcodes[372].opNext = 373;
    this.opcodes[372].type = TLS;
    this.opcodes[372].length = 1;
    this.opcodes[372].stringIndex = 113;

    this.opcodes[373] = [];
    this.opcodes[373].opNext = 374;
    this.opcodes[373].type = TLS;
    this.opcodes[373].length = 1;
    this.opcodes[373].stringIndex = 114;

    this.opcodes[374] = [];
    this.opcodes[374].opNext = 375;
    this.opcodes[374].type = TLS;
    this.opcodes[374].length = 1;
    this.opcodes[374].stringIndex = 115;

    this.opcodes[375] = [];
    this.opcodes[375].opNext = 376;
    this.opcodes[375].type = TRG;
    this.opcodes[375].min = 9;
    this.opcodes[375].max = 9;

    this.opcodes[376] = [];
    this.opcodes[376].opNext = 377;
    this.opcodes[376].type = TRG;
    this.opcodes[376].min = 10;
    this.opcodes[376].max = 10;

    this.opcodes[377] = [];
    this.opcodes[377].opNext = 383;
    this.opcodes[377].type = REP;
    this.opcodes[377].min = 0;
    this.opcodes[377].max = Infinity;

    this.opcodes[378] = [];
    this.opcodes[378].opNext = 383;
    this.opcodes[378].type = ALT;

    this.opcodes[379] = [];
    this.opcodes[379].opNext = 380;
    this.opcodes[379].type = RNM;
    this.opcodes[379].ruleIndex = 64;

    this.opcodes[380] = [];
    this.opcodes[380].opNext = 383;
    this.opcodes[380].type = CAT;

    this.opcodes[381] = [];
    this.opcodes[381].opNext = 382;
    this.opcodes[381].type = RNM;
    this.opcodes[381].ruleIndex = 53;

    this.opcodes[382] = [];
    this.opcodes[382].opNext = 383;
    this.opcodes[382].type = RNM;
    this.opcodes[382].ruleIndex = 64;

    this.opcodes[383] = [];
    this.opcodes[383].opNext = 384;
    this.opcodes[383].type = TRG;
    this.opcodes[383].min = 0;
    this.opcodes[383].max = 255;

    this.opcodes[384] = [];
    this.opcodes[384].opNext = 385;
    this.opcodes[384].type = TRG;
    this.opcodes[384].min = 32;
    this.opcodes[384].max = 32;

    this.opcodes[385] = [];
    this.opcodes[385].opNext = 386;
    this.opcodes[385].type = TRG;
    this.opcodes[385].min = 33;
    this.opcodes[385].max = 126;

    this.opcodes[386] = [];
    this.opcodes[386].opNext = 389;
    this.opcodes[386].type = ALT;

    this.opcodes[387] = [];
    this.opcodes[387].opNext = 388;
    this.opcodes[387].type = RNM;
    this.opcodes[387].ruleIndex = 62;

    this.opcodes[388] = [];
    this.opcodes[388].opNext = 389;
    this.opcodes[388].type = RNM;
    this.opcodes[388].ruleIndex = 58;

}