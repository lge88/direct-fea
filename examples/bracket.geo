lc = 1e-1;
t = 0.13;
w = 4.00;
h = 8.00;
l = 12.00;

Point(1) = {0, 0, 0, lc};
Point(2) = {t, 0, 0, lc};
Point(3) = {t, 0, h-t, lc};
Point(4) = {l, 0, h-t, lc};
Point(5) = {l, 0, h, lc};
Point(6) = {0, 0, h, lc};

Point(7) = {0, w, 0, lc};
Point(8) = {t, w, 0, lc};
Point(9) = {t, w, h-t, lc};
Point(10) = {l, w, h-t, lc};
Point(11) = {l, w, h, lc};
Point(12) = {0, w, h, lc};

Line(1) = {1,2};
Line(2) = {2,3};
Line(3) = {3,4};
Line(4) = {4,5};
Line(5) = {5,6};
Line(6) = {6,1};
Line(7) = {7,8};
Line(8) = {8,9};
Line(9) = {9,10};
Line(10) = {10,11};
Line(11) = {11,12};
Line(12) = {12,7};
Line(13) = {8,2};
Line(14) = {7,1};
Line(15) = {9,3};
Line(16) = {12,6};
Line(17) = {10,4};
Line(18) = {11,5};

Line Loop(19) = {3, 4, 5, 6, 1, 2};
Plane Surface(20) = {19};
Line Loop(21) = {4, -18, -10, 17};
Plane Surface(22) = {21};
Line Loop(23) = {9, 10, 11, 12, 7, 8};
Plane Surface(24) = {23};
Line Loop(25) = {16, 6, -14, -12};
Plane Surface(26) = {25};
Line Loop(27) = {2, -15, -8, 13};
Plane Surface(28) = {27};
Line Loop(29) = {3, -17, -9, 15};
Plane Surface(30) = {29};
Line Loop(31) = {13, -1, -14, 7};
Plane Surface(32) = {31};
Line Loop(33) = {16, -5, -18, 11};
Plane Surface(34) = {33};

Surface Loop(35) = {-20, 22, 24, 26, 28, 30, -32, 34};
Volume(36) = {35};

Physical Volume (1) = {36};
Physical Surface("left") = {26};
Physical Surface ("top") = {34};

Transfinite Line {5, 16, 11, 18} = 10 Using Progression 1;
Transfinite Surface {34};
Transfinite Surface {26};
Transfinite Surface {34};
Transfinite Surface {30};
Transfinite Surface {28};
Transfinite Surface {28};
Transfinite Line {2} = 10 Using Bump 1;
Transfinite Surface {26};
Transfinite Surface {34} = {11, 12, 6, 5};
Recombine Surface {34};
Recombine Surface {34};
Recombine Surface {34};
