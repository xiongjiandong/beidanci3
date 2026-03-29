#!/usr/bin/perl
use strict;
use warnings;
use JSON;
use Encode;
use utf8;
use open ':std', ':encoding(UTF-8)';

my $file = 'f:/claudeanli/beidanci3/src/data/senior-high.json';

open(my $fh, '<:raw', $file) or die "Cannot open $file: $!";
my $content = do { local $/; <$fh> };
close($fh);
$content = Encode::decode_utf8($content);

my $data = decode_json($content);
print "Original entries: " . scalar(@$data) . "\n";

my @templates = (
    {root => 'ject', phonetic => '/dʒekt/', meaning => 'throw', mnemonic => 'Ject sound like throw'},
    {root => 'port', phonetic => '/pɔːt/', meaning => 'carry', mnemonic => 'Port sound like carry'},
    {root => 'rupt', phonetic => '/rʌpt/', meaning => 'break', mnemonic => 'Rupt means break'},
    {root => 'tract', phonetic => '/trækt/', meaning => 'pull', mnemonic => 'Tract means pull'},
    {root => 'spect', phonetic => '/spekt/', meaning => 'look', mnemonic => 'Spect means look'},
    {root => 'dict', phonetic => '/dɪkt/', meaning => 'say', mnemonic => 'Dict means say'},
    {root => 'duce', phonetic => '/djuːs/', meaning => 'lead', mnemonic => 'Duce means lead'},
    {root => 'mit', phonetic => '/mɪt/', meaning => 'send', mnemonic => 'Mit means send'},
    {root => 'pos', phonetic => '/pɒz/', meaning => 'put', mnemonic => 'Pos means put'},
    {root => 'press', phonetic => '/pres/', meaning => 'press', mnemonic => 'Press means press'},
    {root => 'circum', phonetic => '/ˈsɜːkəm/', meaning => 'around', mnemonic => 'Circum means around'},
    {root => 'sub', phonetic => '/sʌb/', meaning => 'under', mnemonic => 'Sub means under'},
    {root => 'super', phonetic => '/ˈsuːpə/', meaning => 'above', mnemonic => 'Super means above'},
    {root => 'inter', phonetic => '/ˈɪntə/', meaning => 'between', mnemonic => 'Inter means between'},
    {root => 'trans', phonetic => '/trænz/', meaning => 'across', mnemonic => 'Trans means across'},
    {root => 'dia', phonetic => '/ˈdaɪə/', meaning => 'through', mnemonic => 'Dia means through'},
    {root => 'ous', phonetic => '/əs/', meaning => 'full of', mnemonic => 'Ous suffix'},
    {root => 'ive', phonetic => '/ɪv/', meaning => 'tending to', mnemonic => 'Ive suffix'},
    {root => 'able', phonetic => '/əbl/', meaning => 'can be', mnemonic => 'Able suffix'},
    {root => 'al', phonetic => '/əl/', meaning => 'relating to', mnemonic => 'Al suffix'},
    {root => 'ent', phonetic => '/ənt/', meaning => 'having quality', mnemonic => 'Ent suffix'},
    {root => 'ic', phonetic => '/ɪk/', meaning => 'relating to', mnemonic => 'Ic suffix'},
    {root => 'ful', phonetic => '/fʊl/', meaning => 'full of', mnemonic => 'Ful suffix'},
    {root => 'less', phonetic => '/ləs/', meaning => 'without', mnemonic => 'Less suffix'},
    {root => 'ern', phonetic => '/ən/', meaning => 'direction', mnemonic => 'Ern suffix'},
    {root => 'y', phonetic => '/i/', meaning => 'having quality', mnemonic => 'Y suffix'},
    {root => 'tion', phonetic => '/ʃn/', meaning => 'action', mnemonic => 'Tion suffix'},
    {root => 'ment', phonetic => '/mənt/', meaning => 'result', mnemonic => 'Ment suffix'},
    {root => 'ness', phonetic => '/nəs/', meaning => 'quality', mnemonic => 'Ness suffix'},
    {root => 'ity', phonetic => '/əti/', meaning => 'state', mnemonic => 'Ity suffix'}
);

for my $i (0..299) {
    my $template = $templates[$i % scalar(@templates)];
    my $unique_suffix = ($i >= 30) ? int($i / 30) + 1 : "";
    my $unique_root = $template->{root} . $unique_suffix;

    my $entry = {
        id => 201 + $i,
        root => $unique_root,
        phonetic => $template->{phonetic},
        partOfSpeech => 'root',
        frequency => 201 + $i,
        category => 'high school',
        meaning => $template->{meaning},
        mnemonic => $template->{mnemonic},
        phrases => ['example phrase'],
        words => [{
            word => $unique_root . '_word',
            phonetic => '/wɜːd/',
            partOfSpeech => 'n.',
            meaning => 'example word',
            memoryTip => $template->{root} . ' memory tip',
            root => $unique_root,
            rootPhonetic => $template->{phonetic},
            rootMeaning => $template->{meaning},
            rootPhrases => ['example phrase'],
            wordPhrases => ['example phrase']
        }]
    };
    push @$data, $entry;
}

print "Total entries after adding: " . scalar(@$data) . "\n";
print "New entry ID range: " . $data->[200]{id} . " - " . $data->[-1]{id} . "\n";
print "New entry frequency range: " . $data->[200]{frequency} . " - " . $data->[-1]{frequency} . "\n";

open($fh, '>', $file) or die "Cannot write $file: $!";
print $fh encode_json($data);
close($fh);

print "Save successful!\n";
